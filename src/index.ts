import express from "express";
import { routes } from "./routes/index";

const app = express();


/*--------------------------------------------------------------------------------------------------------------------------*/


routes(app);


/* Basicamente criamos uma constante chamada app onde aplicamos a função .listen que recebe uma
porta e uma fução, que seria a mensagem para dizer se o servidor esta funcionando ou não*/
app.listen(3000, () => {

    console.log("servidor iniciado na porta 3000");

});
/*--------------------------------------------------------------------------------------------------------------------------*/


