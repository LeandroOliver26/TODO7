//instanciamos o express e utilizar a const app para usar suas funcionalidades, como criar uma rota de acordo com metodo e função e subir o servidor.
const express = require("express");
const CalculadoraController = require("./controller/CalculadoraController");
const app = express();

app.use(express.json());

const port = 3300;



app.get("/soma", CalculadoraController.soma)
app.get("/subtracao", CalculadoraController.subtracao)
app.get("/divisao", CalculadoraController.divisao)
app.get("/multiplicacao", CalculadoraController.multiplicacao)


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
