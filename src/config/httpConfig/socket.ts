import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_API_SOCKET_URI);

export enum SocketEvents {
  NEW_COMMUNICATION = 'NEW_COMMUNICATION',
  UPDATE_COMMUNICATION = 'UPDATE_COMMUNICATION',
}
