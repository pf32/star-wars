# star-wars

Descrição:
API com dados de planetas da franquia Star Wars. Implementação utilizando Nodejs e mysql.

Pré-requisitos
node 12

npm 6

visual studio cod ou gitpod

Mysql

Instruções
Todos os comandos deverão ser executado via terminal.


npm install

npm start
A partir de agora você poderá acessar os serviços pelos endpoints.

Endpoints
Endpoints necessário para consumir os serviços da aplicação:

Criar planeta

POST - http://localhost:8080/planetas

Segue abaixo, exemplo com os campos para realizar a chamada JSON:

{

"nome":"",

"clima":"",

"terreno":""

}

Listar planetas

GET - http://localhost:8080/planetas

buscar planeta pelo ID

GET - http://localhost:8080/planetas{id}

buscar planeta pelo nome

GET - http://localhost:8080/planetas/{nome}

Deletar planeta

DELETE - http://localhost:8080/planetas/{id}
