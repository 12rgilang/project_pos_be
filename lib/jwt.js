const jwt= require('jsonwebtoken');

module.exports={
    createToken:(payload) =>{
        return jwt.sign(payload,'123abc',{
            expiresIn:'5s'
        });
    },

    validToken:(token)=>{
        return jwt.verify(token,'123abc')
    }
} 