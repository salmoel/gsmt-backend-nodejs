# COMANDOS BÁSICOS PARA BANCO DE DADOS MYSQL

### SELECT

O comando SELECT é muito simples e, serve para que possamos mostrar os dados de uma tabela. Esse comando ou sintaxe pode ser usado de algumas formas, veja:

```
SELECT * FROM clientes;
```

<p align="justify">Obs: quando colocamos o * estamos falando para o banco que desejamos que ele retorne ou mostre todos os campos, veja, por exemplo id, nome, email.</p>

```
SELECT nome, email FROM clientes;
```

<p align="justify">Obs: quando usamos esse comando usado acima estamos indicando que desejamos que o banco nos mostre ou retorne somente os campos de nome e email.</p>

### INSERT

O comando INSERT serve para que possamos inserir dados em uma tabela definida, onde podemos inserir todos os campos de uma tabela, ou inserir somente campos definidos na sua consulta de inserção.

```
INSERT INTO clientes (nome, email, empresa) VALUES ('Salmoel', 'salmoel@brodevs.org', 'brodevs');
```

<p align="justify">Obs: veja que não informamos o campo id, já que o mesmo é AUTO_INCREMENT.</p>

<p align="justify">Obs: o comando values são os valores que correspondem aos campos que você informou no primeiro parentese, ou seja, os dados que serão inseridos. É necessário seguir a ordem que você especificou os campos.</p>

<p align="justify">Obs: no values, foi utilizado aspas simples já que os valores são STRINGS, isso é necessário porque campos do tipo VARCHAR ou CHAR são considerados Strings nos banco de dados.</p>

### UPDATE

O comando UPDATE é bem parecido com o comando INSERT, porém é utilizado para atualizar registros do banco de dados.

```
UPDATE clientes A SET nome = 'Samuel', email = 'samuel@brodevs.org';
```

<p align="justify">Obs: observe que a cada campo que você deseja atualizar é necessário colocar uma virgula. E os campos só podem ser indicados depois do comando SET. </p>

<p align="justify">Obs: o comando update não deve ser executado desta maneira, ou então, irá atualizar todos os registros. Sendo assim, o ideial é que você indique o registro da tabela que deseja atualizar, conforme mostra abaixo.</p>

```
UPDATE clientes SET nome = 'Samuel', email = 'samuel@brodevs.org' WHERE id = 1;
```

<b>No exemplo acima, somente será atualizado o registro que conter o id 1.</b>


### DELETE

<p align="justify">O comando delete nunca deve ser utilizado sem a clasula WHERE. Caso contrário, irá deletar todos os registros da tabela. Sempre que você deseja apagar um registro, provalvelmente quer apagar um em espeficio. Assim, sempre é importante usar o WHERE.</p>

``` 
DELETE FROM clientes WHERE id = 1;
```
