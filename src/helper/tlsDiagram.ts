// this helper function returns the intersection point

import { CENTER_SCREEN, TLS_NODE_TYPES } from '@/constants/tlsCommunications';
import { Edge, MarkerType, Node, Position, XYPosition } from 'react-flow-renderer';

// of the line between the center of the intersectionNode and the target node
const getNodeIntersection = (intersectionNode: Node, targetNode: Node): XYPosition => {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a

  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    position: intersectionNodePosition,
  } = intersectionNode;
  const targetPosition = targetNode.position;

  const w = (intersectionNodeWidth ?? 0) / 2;
  const h = (intersectionNodeHeight ?? 0) / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + w;
  const y1 = targetPosition.y + h;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
};

// returns the position (top,right,bottom or right) passed node compared to the intersection point
const getEdgePosition = (node: Node, intersectionPoint: XYPosition) => {
  const n = { ...node.position, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + (n.width ?? 0) - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + (n.height ?? 0) - 1) {
    return Position.Bottom;
  }

  return Position.Top;
};

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export const getEdgeParams = (source: Node, target: Node) => {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
};

const checkStatusOfNode = (communicationEvent: any[], id: string) => {
  const res = communicationEvent.find((item) => {
    return item.sendNodeId === id || item.receiveNodeId === id;
  });
  const status = res?.status;
  return status;
};

export const createNodesAndEdges = (listDevice?: any[], communicationEvent?: any[]) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const listNodeDevices =
    listDevice &&
    listDevice?.filter((item) => {
      return item.typeNode !== 0;
    });

  listDevice &&
    listNodeDevices &&
    listDevice.map((item, index) => {
      const { id, name, typeNode } = item;

      const degrees = index * (360 / listNodeDevices.length);
      const radians = degrees * (Math.PI / 180);
      const x = 280 * Math.cos(radians) + CENTER_SCREEN.x;
      const y = 280 * Math.sin(radians) + CENTER_SCREEN.y;

      const position = typeNode === 0 ? CENTER_SCREEN : { x, y };
      // const type = typeNode === 0 ? TLS_NODE_TYPES.DEFAULT : TLS_NODE_TYPES.CUSTOM;
      const status = communicationEvent && checkStatusOfNode(communicationEvent, id);
      nodes.push({
        id,
        data: { label: name, status },
        position,
        type: TLS_NODE_TYPES.CUSTOM,
      });
    });

  communicationEvent &&
    communicationEvent.map((item: any) => {
      const { id, sendNodeId, receiveNodeId, status } = item;
      const animated = status === 1 || status === 2;
      let stroke = '';
      switch (status) {
        case 1: {
          stroke = '#4cb86a';
          break;
        }
        case 2: {
          stroke = '#e2be00';
          break;
        }
        default: {
          stroke = '#56acdd';
        }
      }
      edges.push({
        id,
        source: sendNodeId,
        target: receiveNodeId,
        animated,
        style: {
          stroke,
        },
        markerEnd: { type: MarkerType.Arrow },
      });
    });
  return { nodes, edges };
};
