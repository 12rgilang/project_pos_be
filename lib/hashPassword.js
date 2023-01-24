const bcrypt = require("bcrypt");
const saltRound = 10;

const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, saltRound);
    } catch (error) {
        return null;
    }
};

const hashMatch =  async (passwordFromLogin,hashedPasswordFromDatabase) =>{
    try {
        let match = await bcrypt.compare(passwordFromLogin,hashedPasswordFromDatabase);
        return match;
    } catch (error) {
        return false;
    }
}

module.exports = {
    hashPassword,hashMatch
}