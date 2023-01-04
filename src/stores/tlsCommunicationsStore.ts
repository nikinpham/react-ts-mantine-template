import { ITLSCommunicationStore } from '@/interfaces/interfaceTLSCommunications';
import { StateCreator } from 'zustand';

export const createTLSCommunicationSlice: StateCreator<ITLSCommunicationStore> = (set) => ({
  listDevices: [],
  communicationEvents: [],
  setListDevices: (listDevices) => set(() => ({ listDevices })),
  setCommunicationEvents: (communicationEvents) => set(() => ({ communicationEvents })),
});
