"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
/* Criamos uma rota raiz ("/") que quando acessada, retorna a mensagem "Bem vindo ao Servidor" */
app.get("/", function (req, res) {
    res.send("Bem vindo ao Servidor novo");
});
app.get("/users", function (req, res) {
    var usuarios = [{
            nome: "João",
            idade: 30,
            cidade: "São Paulo"
        }, {
            nome: "Maria",
            idade: 25,
            cidade: "Rio de Janeiro"
        }
    ];
    res.send(usuarios);
});
/* Basicamente criamos uma constante chamada app onde aplicamos a função .listen que recebe uma
porta e uma fução, que seria a mensagem para dizer se o servidor esta funcionando ou não*/
app.listen(3000, function () {
    console.log("servidor iniciado na porta 3000");
});
