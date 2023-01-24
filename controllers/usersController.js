const db = require('../models')
const { hashPassword, hashMatch } = require('../lib/hashPassword')
// Import jwt
const { createToken } = require('./../lib/jwt')

module.exports = {
    register: async (req, res) => {
        let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,10}$/
        let { username, password, } = req.body;

        if (!regex.test(password)) {
            return res.status(400).send({
                isError: true,
                message: "Password must between 6 to 10 characters and contain a number",
                data: null
            })
        }
        try {
            // Step-1 Ngambil value req.body
            //  let {username, email, password, role} = req.body

            // Step-2
            await db.user.create({
                username, password: await hashPassword(password),role:"admin"
            })

            // Step-3
            res.status(201).send({
                isError: false,
                message: 'Register Success',
                data: null
            })
        } catch (error) {
            return res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            });
        }
    },
    login: async (req, res) => {
        let { username, password } = req.query;
        console.log(username)
        try {
            // Step-1 Ambil value dari req.query
            // let { usernameOrEmail, password } = req.query


            // Step-2 Check username/email and password exist or not
            let findUsers = await db.users.findOne({
                where: {
                    username
                }
            })

            if (!findUsers) {
                return res.status(404).send({
                    isError: true,
                    message: "Username not found",
                    data: null
                });
            }



            let hasMatchResult = await hashMatch(password, findUsers.password)


            if (hasMatchResult === false) return res.status(404).send({
                isError: true,
                message: 'Password Not Match',
                data: null
            })

            // Step-3 Kirim response
            res.status(201).send({
                isError: false,
                message: 'Login Success',
                data: {
                    token: createToken({ id: findUsers.uuid })
                }
            })
        } catch (error) {
            return res.status(400).send({
                isError: true,
                message: error.message,
                data: error,
            });
        }
    },
    addEmployee: async (req, res) => {
        let { username, password } = req.body
        let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,10}$/
        if (!regex.test(password)) {
            return res.status(400).send({
                isError: true,
                message: "Password must between 6 to 10 characters and contain a number",
                data: null

            }
            )
        }

        try {
             // Step-2
             await db.users.create({
                username, password: await hashPassword(password),role:"employee"
            })

            // Step-3
            res.status(201).send({
                isError: false,
                message: 'Register Employee Success',
                data: null
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }
}