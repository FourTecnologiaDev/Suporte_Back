const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./src/routes/routes");
const cors = require("cors");

const mongoSchemaLogin = require("./src/schema/login");
const mongoSchemaTickets = require("./src/schema/tabela");
const mongoSchemaFinalizados = require("./src/schema/finalizado");

require("dotenv").config();

mongoSchemaLogin();
mongoSchemaTickets();
mongoSchemaFinalizados();

app.use(express.static("src"));
app.use(cors({
  origin: '*', // Permitir acesso de qualquer origem
  methods: 'GET,PUT,POST,DELETE', // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization', // Cabeçalhos permitidos
}));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes
app.use("/", routes);

// Server
const porta = 3000;
app.listen(process.env.PORT || porta);
// app.listen(porta, function() {

console.log("servidor rodando na porta: " + process.env.PORT || porta);

// });