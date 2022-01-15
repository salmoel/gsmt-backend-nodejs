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
        * DELETE[X]
*/

//-- Variaveis globais
const express = require('express');
const server = express();
const router = express.Router();

//-- Aplicacao de middleware
server.use(express.json()); //-- Serve para o express saber qual o formato de dados virá no body da requisição

//-- Criação das Rotas
router.get('/task', (_req, res) => {
    return res.send('Get Ok!');
});

router.post('/task', (_req, res) => {
    return res.status(200).send('Post Ok!');
});

router.put('/task/:id', (_req, res) => {
    // Faltou pegar as informacoes enviadas na req (id)
    return res.send('Put Ok!')
});

router.delete('/task', (_req, res) => {
    // Faltou colocar parametro para saber qual registro será excluido
    // Faltou pegar as informacoes enviadas na req (id)
    return res.send('Deletet Ok!')
});

server.use(router);

//-- Configuração do serviço
server.listen(3334, () => console.log('Server running at http://localhost:3334/!'));
