// src/components/WebSocketComponent.js
import React, { useEffect, useState } from 'react';
// import WebSocketService from '../services/WebSocketService';

// src/services/WebSocketService.js
class WebSocketService {
    constructor(url) {
        this.socket = new WebSocket(url);
    }

    onOpen(callback) {
        this.socket.onopen = callback;
    }

    onMessage(callback) {
        this.socket.onmessage = (event) => callback(event.data);
    }

    onClose(callback) {
        this.socket.onclose = callback;
    }

    onError(callback) {
        this.socket.onerror = callback;
    }

    sendMessage(message) {
        this.socket.send(JSON.stringify(message));
    }
}



const webSocketComponent = () => {
    const [messages, setMessages] = useState([]);
    const socket = new WebSocketService('ws://127.0.0.1:8000/ws/data/');

    useEffect(() => {
        socket.onOpen(() => {
            console.log("[open] Connection established");
            socket.sendMessage({message: "Hello Server!"});
        });

        socket.onMessage((data) => {
            console.log(`[message] Data received from server: ${data}`);
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.onClose((event) => {
            if (event.wasClean) {
                console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                console.error('[close] Connection died');
            }
        });

        socket.onError((error) => {
            console.error(`[error] ${error.message}`);
        });

        // Clean up the WebSocket connection when the component unmounts
        return () => {
            socket.socket.close();
        };
    }, [socket]);

    return (
        <div>
            <h1>WebSocket Messages</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default webSocketComponent;
