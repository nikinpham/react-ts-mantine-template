import { Group, Image, Text, Box } from '@mantine/core';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import VM from '@/assets/icons/Virtual_Machine.svg';

const FloatingNode = (nodeProps: NodeProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <div className={`status-${nodeProps.data.status} status`}></div> */}
      <Image src={VM} width={40} />
      <Group>
        <Text className="label">{nodeProps.data.label}</Text>
        <Handle type="source" position={Position.Bottom} />
        <Handle type="target" position={Position.Bottom} />

        <Handle type="source" position={Position.Top} />
        <Handle type="target" position={Position.Top} />

        <Handle type="source" position={Position.Left} />
        <Handle type="target" position={Position.Left} />

        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Right} />
      </Group>
    </Box>
  );
};

export default FloatingNode;
