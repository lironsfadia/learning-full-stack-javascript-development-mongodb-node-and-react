import express from 'express'
import config from './config'
import apiRouter from './api'

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and <em>EJS</em>!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.log('Express listen on port', config.port);
});

