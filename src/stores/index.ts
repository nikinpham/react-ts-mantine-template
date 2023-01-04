import { IRootStore } from '@/interfaces/interfaceTLSCommunications';
import create from 'zustand';
import { createSystemSlice } from './systemStore';
import { createTLSCommunicationSlice } from './tlsCommunicationsStore';

const useGlobalStore = create<IRootStore>()((...helpers) => ({
  ...createSystemSlice(...helpers),
  ...createTLSCommunicationSlice(...helpers),
}));
export default useGlobalStore;
