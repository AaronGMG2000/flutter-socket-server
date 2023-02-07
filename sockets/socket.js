const io = require('../index');

io.on('connection', (client) => {
    console.log('cliente conectado');
    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('mensaje', (mensaje) => {
        console.log(mensaje);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
        client.emit('mensaje', { client: 'Nuevo mensaje' });
    });
});
