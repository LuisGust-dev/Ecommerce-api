/* 
- Criamos uma camada de orquestradora de rotas, onde todas as rotas da aplicação serão centralizadas.
- Isso facilita a manutenção e a escalabilidade do código, permitindo que novas rotas sejam adicionadas facilmente.
- A função routes recebe uma instância do Express (app) como parâmetro e aplica o middleware express.json() para que o Express entenda requisições com JSON no corpo.
- Em seguida, usamos app.use(UserRoutes) para registrar as rotas de usuários na aplicação. 
*/ 
import  express  from "express";
import { UserRoutes } from "./users.route";


export const routes = (app:express.Express)=>{

   /* Usamos o middleware express.json() para que o express entenda requisições com JSON no corpo */
    app.use(express.json());
     app.use(UserRoutes);
};