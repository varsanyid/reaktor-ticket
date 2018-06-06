import socketIOClient from 'socket.io-client';

export const createSocket = () => {
    const socketConnectionOpts = {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transport": ["websocket"]
    }
    return socketIOClient(process.env.SERVER, socketConnectionOpts)
}