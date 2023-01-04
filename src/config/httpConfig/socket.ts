import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_TLS_COMMUNICATIONS_SOCKET);

export enum SocketEvents {
  NEW_COMMUNICATION = 'CENTRAL_INIT',
  UPDATE_COMMUNICATION = 'CENTRAL_UPDATE',
}
