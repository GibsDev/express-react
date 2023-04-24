import {io} from 'socket.io-client';
import {useEffect, useState} from 'react';

const App = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        (async () => {
            const socket = io();

            socket.on("connect", () => {
                console.log('Connected to socket');
            });

            setSocket(socket);
        })();
    }, []);

    const fire = () => {
        if (!socket) return;
        socket.emit('msg', 'Hello There!')
    };

    return <div>
        <p>App here</p>
        {socket && <>
            <p>Connected</p>
            <button onClick={fire}>Message!</button>
        </>}
    </div>;
}

export default App;
