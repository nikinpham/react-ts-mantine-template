import create from 'zustand';
import { ISystemStore } from '@/interfaces/interfaceCommon';
import { createSystemSlice } from './systemStore';

export const useGlobalStore = create<ISystemStore>()((...helpers) => ({
  ...createSystemSlice(...helpers),
}));
