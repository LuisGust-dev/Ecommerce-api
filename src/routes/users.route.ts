import Express from "express";
import { UsersController } from "../controllers/users.controller";


/* Importando as rotas de usuários 
-   1* etapa Criamos uma constante UserRoutes que recebe o método Router do Express
- Resumindadamente o Router do Express é usado para criar manipuladores de rotas modulares e montáveis.
- Criamos uma camada de roteamento separada para gerenciar as rotas relacionadas aos usuários,
- Isso ajuda a organizar o código, especialmente em aplicativos maiores, onde diferentes partes da aplicação podem ter suas próprias rotas.
*/
/*Ou seja Criamos um Mensageiro , ele guarda somente a rota e encaminha a view para o controller de acordo a rota */


export const UserRoutes = Express.Router();


/*--------------------------------------------------------------------------------------------------------------------------*/
/* Criamos uma rota /users que quando acessada com o método GET, retorna todos os usuários cadastrados */
/* 1* etapa Criamos uma rota /users que quando acessada com o método GET, chama o método getAll da classe UserController
- 2* etapa O método getAll é responsável por enviar a lista de usuários como resposta.
*/
UserRoutes.get("/users",UsersController.getAll);

/*--------------------------------------------------------------------------------------------------------------------------*/


/* Criamos uma rota /users/:id que quando acessada com o método GET, retorna as informações de um usuário específico com base no ID fornecido na URL*/
/* 1* etapa Criamos uma rota /users/:id que quando acessada com o método GET, chama o método getById da classe UserController
- 2* etapa O método getById é responsável por enviar as informações do usuário correspondente ao ID fornecido na URL como resposta.
*/

UserRoutes.get("/users/:id",UsersController.getById);

/*--------------------------------------------------------------------------------------------------------------------------*/

/* Criamos uma rota /users/:id que quando acessada com o método PUT, atualiza as informações de um usuário específico com base no ID fornecido na URL*/
/* 1* etapa Criamos uma rota /users/:id que quando acessada com o método PUT, chama o método putById da classe UserController
- 2* etapa O método putById é responsável por atualizar as informações do usuário correspondente ao ID fornecido na URL com os dados fornecidos no corpo da requisição.
*/
UserRoutes.put("/users/:id",UsersController.update);
    

/*--------------------------------------------------------------------------------------------------------------------------*/ 

/* Criamos uma rota /users/:id que quando acessada com o método DELETE, remove um usuário específico com base no ID fornecido na URL*/
/* 1* etapa Criamos uma rota /users/:id que quando acessada com o método DELETE, chama o método deleteById da classe UserController
- 2* etapa O método deleteById é responsável por remover o usuário correspondente ao ID fornecido na URL do array de usuários.
*/
UserRoutes.delete("/users/:id",UsersController.deleteById);

/*--------------------------------------------------------------------------------------------------------------------------*/
/* Criamos uma rota /users que quando acessada com o método POST, adiciona um novo usuário ao array de usuários */
UserRoutes.post("/users",UsersController.save);

/*--------------------------------------------------------------------------------------------------------------------------*/