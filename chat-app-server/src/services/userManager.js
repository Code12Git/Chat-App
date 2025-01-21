const mongoose = require('mongoose')
const {User} = require('../models');
const { CONFLICT } = require('../utils/errors');



const register = async (body) => {
    const { email, username, password } = body;
    
    try {
        const user = await User.findOne({ email });
        if (user) {
            throw new AppError({ ...CONFLICT, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, username, password: hashedPassword });

        await newUser.save();
        return newUser; 
    } catch (err) {
        throw err;
    }
};

// const login = async() => {
//     try{    
//         const user = new User
//     }catch(err){
//         throw err;
//     }
// }

module.exports = {register}