const { io } = require('../index');

io.on('connection', (client) => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    client.on('message', (payload) => {
        console.log('message', payload);
        io.emit('message', payload);
    });

    client.on('emitir-mensaje', (payload) => {
        // io.emit('nuevo-mensaje', payload); // emite a todos
        console.log('payload', payload);
        client.broadcast.emit('nuevo-mensaje', payload); // emite a todos menos al que lo emitió
    });
});
