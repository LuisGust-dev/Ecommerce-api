/*----------------Controllers-------------------- */
// Aqui ficam as regras de negócio, ou seja, o que cada rota faz

import { getFirestore } from "firebase-admin/firestore";
import { Request, Response } from "express";

type User = {
        id:number;
        nome:string;
        email:string;
    };
    
    /* Usei o middleware express.json() para que o express entenda requisições com JSON no corpo */
    let usuarios:User[]= []; 

export class UsersController {

/*--------------------------------------------------------------------------------------------------------------------------*/
/* Criamos uma rota /users que quando acessada com o método GET, retorna todos os usuários cadastrados
- 1* etapa Criamos uma rota /users que quando acessada com o método GET, chama o método getAll da classe UserController
- 2* etapa O método getAll é responsável por enviar a lista de usuários como resposta.
*/
static async getAll(req: Request, res: Response) {
   const snapshot =  await getFirestore().collection("users").get(); 
   const users = snapshot.docs.map(doc => {
    return {
        id: doc.id,
        ...doc.data()
        };
   });       
    
    res.send(users);
    }


/*--------------------------------------------------------------------------------------------------------------------------*/
    /* Criei uma rota /users/:id que quando acessada com o método GET, retorna as informações de um usuário 
    específico com base no ID fornecido na URL 
    
    - Para isso é necessario converter o ID de string para número, pois os parâmetros de rota são sempre strings.
    - Usamos o método find para localizar o usuário com o ID correspondente no array de usuários
    - Enviamos o usuário encontrado como resposta. Se nenhum usuário for encontrado, será retornado undefined.
    */
static getById(req:Request,res:Response){
let userID =Number(req.params.id);
let user = usuarios.find((_user:User)=>_user.id === userID);
res.send(user);
}


/*--------------------------------------------------------------------------------------------------------------------------*/

/* Criamos uma rota /users/:id que quando acessada com o método PUT, atualiza as informações de um usuário específico com base no ID fornecido na URL 
    -1* etapa = Para isso é necessario converter o ID de string para número, pois os parâmetros de rota são sempre strings.
    -2* etapa Criamos uma variável user que recebe o corpo da requisição (req.body), que deve conter as novas informações do usuário
    - 3* etapa Usamos o método findIndex para localizar o índice do usuário com o ID correspondente no array de usuários
    - 4* etapa Atualizamos as informações do usuário no array com os dados fornecidos no corpo da requisição
    - 5* etapa Enviamos uma mensagem de sucesso como resposta.
    */
static update(req:Request, res:Response) {
    let userId = Number(req.params.id);
        let user = req.body;
        let indexOF = usuarios.findIndex((_user: User )=> _user.id === userId);
        usuarios[indexOF].nome = user.nome;
        usuarios[indexOF].email = user.email;
        
        res.send({
            message: "Usuário atualizado com sucesso",
        });
    /*Resumidamente nós trasnferimos o id de String para inteiro, depois fizemos uma requisição do conteudo que foi
    adicionado no Body  e armazenamos em uma variavel, depois colocamos em cada usuario um indice conforme o seu 
    identificador , */ 
    }

/*--------------------------------------------------------------------------------------------------------------------------*/

/*
- Criamos uma rota /users que quando acessada com o método POST, adiciona um novo usuário ao array de usuários
- 1* etapa Criamos uma variável user que recebe o corpo da requisição (req.body), que deve conter as informações do novo usuário
- 2* etapa Atribuímos um ID único ao novo usuário incrementando a variável id
- 3* etapa Adicionamos o novo usuário ao array de usuários
- 4* etapa Enviamos uma mensagem de sucesso como resposta.
*/
static async save(req:Request, res:Response){

    let user = req.body;
    const userSalvo = await getFirestore().collection("users").add(user);
    res.send({
        message: `Usuário ${userSalvo.id} adicionado com sucesso`
    });
};
/*--------------------------------------------------------------------------------------------------------------------------*/
/* Criamos uma rota /users/:id que quando acessada com o método DELETE, remove um usuário específico com base no ID fornecido na URL
- 1* etapa Para isso é necessario converter o ID de string para número, pois os parâmetros de rota são sempre strings.
- 2* etapa Usamos o método findIndex para localizar o índice do usuário com o ID correspondente no array de usuários
- 3* etapa Usamos o método splice para remover o usuário do array com base no índice encontrado
- 4* etapa Enviamos uma mensagem de sucesso como resposta.
*/
static deleteById(req:Request,res:Response){
    let userID = Number(req.params.id);
    let indexOF = usuarios.findIndex((_user:User) => _user.id === userID);
    usuarios.splice(indexOF,1);
    res.send({
        message: "Usuário removido com sucesso",
    });
    
}
/*--------------------------------------------------------------------------------------------------------------------------*/



}



