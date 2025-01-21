const {userManager,responseManager} = require('../services')

const register = async (req, res) => {
    try {
        const user = await userManager.register(req.body);
        return responseManager.sendSuccessResponse(res, user, 'User registered successfully');
    } catch (err) {
        return responseManager.sendErrorResponse(res, err);
}
}

const login = async (req, res) => {
    try{
        const user = await userManager.login(req.body);
        return responseManager.sendSuccessResponse(res, user, 'User logged in successfully');
    }catch(err){
        return responseManager.sendErrorResponse(res, err);
    }
}

module.exports = {register,login}