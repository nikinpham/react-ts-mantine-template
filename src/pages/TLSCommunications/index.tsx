import { Group } from '@mantine/core';
import Diagram from './components/Diagram';
import Status from './components/Status';

const TLSCommunication = () => {
  return (
    <Group sx={{ height: '100%' }} position="apart">
      <Diagram />
      <Status />
    </Group>
  );
};
export default TLSCommunication;
