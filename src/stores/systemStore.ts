import { StateCreator } from 'zustand';
import { socket } from '@/config/httpConfig/socket';
import { ISystemStore } from '@/interfaces/interfaceTLSCommunications';

export const createSystemSlice: StateCreator<ISystemStore> = () => ({
  socket,
});
