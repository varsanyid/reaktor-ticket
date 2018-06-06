import { createSocket } from './SocketFactoryService';

export const subscribeToNewEvents = (callback) => {
    const socket = createSocket();
    socket.on('newEventAdded', (event) => {
        callback(event);
    });
}