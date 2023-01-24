const express = require("express")
const Router = express.Router()

const { usersController } = require("../controllers");
Router.post('/register',usersController.register)
Router.get('/login',usersController.login)
Router.post('/register_employee',usersController.addEmployee)
module.exports = Router;