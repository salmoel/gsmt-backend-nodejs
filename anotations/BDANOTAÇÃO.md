<p align="justify">Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.</p>

- Acesse o Workbench.

- No canto esquerdo temos uma estrutura em forma de árvore onde vemos o banco de dados, ou esquemas.

- Abrindo um dos banco de dados podemos ver alguns dos seus componentes.

- No menu do Workbench, temos o botão "+ SQL" onde uma área de edição será criada para que possamos incluir os comandos de SQL para gerenciar nossos bancos de dados.

- Efetue um duplo clique no banco de dados World. Depois, execute o seguinte comando na área de edição:

```
SELECT * FROM CITY;
```

E a consulta é executada.

- Digite, abaixo, um novo comando:

```
SELECT * FROM COUNTRY;
```

Somente aquele comando selecionado é que será executado.

- Caso o comando esteja errado, abaixo você verá o resultado de cada execução.

- Vamos criar um banco de dados. Para isso, crie um novo script no Workbench e digite:

```
CREATE DATABASE SUCOS;
```

- Podemos criar o banco de dados através de um assistente. Para isso, clique com o botão da direita do mouse sobre uma área qualquer onde fica a lista dos bancos de dados.

E selecione Create Schema.

- Inclua o nome do banco de dados (ex: Sucos2).

- Clique em Apply.

- O comando SQL é exibido. Clique novamente em Apply e o novo banco é criado.

- Podemos apagar o banco de dados. Execute o comando:

```
DROP DATABASE SUCOS;
```

- Note que o banco não mais aparece na lista de bancos de dados.

- É possível acessar o MySQL por linha de comando. Vá para o subdiretório c:\Program Files\MySQL\MySQL Server 8.0\bin

```
mysql -h localhost -u root -p
```

<p align="justify">Tecle enter e depois inclua a senha.</p>

- Digite o comando:

```
CREATE DATABASE sucos;
```

<p align="justify">Se você for conferir no Workbench veja que o banco de dados sucos foi acrescido à lista de bancos disponíveis.</p>

- Para executar uma consulta no banco exemplo world digite:

```
USE world; <ENTER>
SELECT * FROM city; <ENTER>
```

Onde <ENTER> significa teclar a tecla Enter.

- Verá que a lista de cidades são listadas.

- Para sair digite:
  
```
  exit
```
