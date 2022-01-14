/**
 *  1) criar o projeto - npm init - y[x] 
    2) instalar o webserver - npm install express nodemon[x] 
    3) criar o servico[x] 
    4) cria a variavel do express[X] 
    5) instancia a classe[x] 
    6) injeta midware do Json[] 
    7) sobe o servico[] 
    8) Cria Metódos
        * GET[X] 
        * POST[X] 
        * PUT[X] 
        * DELETE[]
*/

const express = require('express');
const server = express();
const router = express.Router();

router.get('/task', (_req, res) => {
    return res.send('Get Ok!');
});

router.post('/task', (_req, res) => {
    return res.status(200).send('Post Ok!');
});

router.put('/task/:id', (_req, res) => {
    return res.send('Put Ok!')
});

router.delete('/task', (_req, res) => {
    return res.send('Deletet Ok!')
});

server.use(router);
server.listen(3334, () => console.log('Server On!'));