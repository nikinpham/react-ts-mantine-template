import { createNodesAndEdges } from '@/helper/tlsDiagram';
import useGlobalStore from '@/stores';
import { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  EdgeTypes,
  NodeTypes,
  ReactFlowInstance,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';
import './Diagram.scss';
import FloatingConnectionLine from './FloatingConnectionLine';
import FloatingEdge from './FloatingEdge';
import FloatingNode from './FloatingNode';

const Diagram = () => {
  const { listDevices, communicationEvents } = useGlobalStore((state) => ({
    listDevices: state.listDevices,
    communicationEvents: state.communicationEvents,
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const edgeTypes: EdgeTypes = {
    floating: FloatingEdge,
  };
  const nodeTypes: NodeTypes = useMemo(() => ({ customNode: FloatingNode }), []);

  const onInit = (reactFlowInstance: ReactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  useEffect(() => {
    const { nodes, edges } = createNodesAndEdges(listDevices, communicationEvents);
    setEdges(edges);
    setNodes(nodes);
  }, [listDevices, communicationEvents]);

  return (
    <ReactFlowProvider>
      <ReactFlow
        className="diagram-fill"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        onConnect={onConnect}
        nodesDraggable={false}
        nodesConnectable={false}
        fitView
        panOnDrag={false}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        connectionLineComponent={FloatingConnectionLine}
        //   onNodeClick={onNodeClick}
      >
        <Controls showInteractive={false} />
        <Background color="red" gap={16} />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default Diagram;
