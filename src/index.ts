import express,{Request, Response} from "express";

const app = express();

/* Usamos o middleware express.json() para que o express entenda requisições com JSON no corpo */
app.use(express.json());

/* Criamos uma rota raiz ("/") que quando acessada, retorna a mensagem "Bem vindo ao Servidor" */
app.get("/",(req:Request, res:Response) => {
    res.send("Bem vindo ao Servidor novo");

           
});

/* Usamos o middleware express.json() para que o express entenda requisições com JSON no corpo */
let usuarios = [{
            nome: "João",
            idade: 30,
            cidade: "São Paulo"
        }, {
            nome: "Maria",
            idade: 25,
            cidade: "Rio de Janeiro"
        }
    
        ]; 


/* Criamos uma rota /users que quando acessada, retorna um array de objetos com informações de usuários */
app.get("/users",(req:Request, res:Response) =>{
    res.send(usuarios);
});


/* Criamos uma rota /users/:id que quando acessada com o método PUT, atualiza as informações de um usuário específico com base no ID fornecido na URL */
app.put("/users/:id",(req:Request, res:Response) => {



});



/* Criamos uma rota /users que quando acessada com o método POST, adiciona um novo usuário ao array de usuários */
app.post("/users",(req:Request, res:Response) => {

    let  user =  req.body;
    usuarios.push(user);
    res.send({
        message: "Usuário adicionado com sucesso",
    });
    
});



/* Basicamente criamos uma constante chamada app onde aplicamos a função .listen que recebe uma
porta e uma fução, que seria a mensagem para dizer se o servidor esta funcionando ou não*/
app.listen(3000, () => {

    console.log("servidor iniciado na porta 3000");

});



