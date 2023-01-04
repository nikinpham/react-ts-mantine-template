import { Socket } from 'socket.io-client';

export interface ITLSCommunicationStore {
  listDevices: any;
  setListDevices: (newState: any) => void;
  communicationEvents: ISocketEvent[];
  setCommunicationEvents: (newState?: ISocketEvent[]) => void;
}

export interface ISocketEvent {
  id: string;
  sendNodeId: string;
  receiveNodeId: string;
  status: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISystemStore {
  socket: Socket;
}

export interface IDevice {
  id: string;
  name: string;
  typeNode: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  issueDate?: string;
  certificationIssue?: string;
}

export interface IRootStore extends ISystemStore, ITLSCommunicationStore {}
