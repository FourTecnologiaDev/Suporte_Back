const express = require("express");
const router = express.Router();
bodyParser = require("body-parser");
const authenticateToken = require("../authenticate/authenticateToken");
const autenticacao = require("./autenticacao");
const novoUsuario = require("./newUser");
const rotasSimples = require("./rotasSimples");
const ticket = require("./ticket");
const enviarEmailSuporte = require("./enviarEmail");
const finalizado = require("./finalizados");

router.use(bodyParser.json());

router.route("/autenticacao").post(autenticacao);
router.route("/novoUsuario").post(authenticateToken, novoUsuario);
router.route("/pesquisar").post(authenticateToken, novoUsuario);
router.route("/login").all(authenticateToken, rotasSimples);
router.route("/pesquisarLogin").all(authenticateToken, rotasSimples);
router.route("/ticket").all(authenticateToken, ticket);
router.route("/enviarEmail").post(authenticateToken, enviarEmailSuporte);
router.route("/finalizados").all(authenticateToken, finalizado);

router.use(express.json());

module.exports = router;


