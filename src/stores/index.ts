import create from 'zustand';
import { ISystemStore } from '@/interfaces/interfaceCommon';
import { createSystemSlice } from './systemStore';

const useGlobalStore = create<ISystemStore>()((...helpers) => ({
  ...createSystemSlice(...helpers),
}));
export default useGlobalStore;
