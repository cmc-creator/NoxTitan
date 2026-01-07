import { Server } from 'socket.io';

let io: Server | null = null;

export function initRealtime(server: any) {
  if (!io) {
    io = new Server(server, {
      cors: { origin: '*' },
    });
    io.on('connection', (socket) => {
      socket.on('shiftUpdate', (data) => {
        socket.broadcast.emit('shiftUpdate', data);
      });
      // Add more event listeners as needed
    });
  }
  return io;
}

export function emitShiftUpdate(data: any) {
  if (io) {
    io.emit('shiftUpdate', data);
  }
}
