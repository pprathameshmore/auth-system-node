const server = require('./app')

const PORT = 4000;

server.listen(PORT, () => {
    console.log('Server is running at ' + PORT);
})