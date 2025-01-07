const UserService=require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully created a new user',
            err: {}
        });
    } catch (error) {
       
        return res.status(500).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}
    const signIn = async (req, res) => {
        try {
            const response = await userService.signin(req.body.email, req.body.password);
            return res.status(201).json({
                data: response,
                success: true,
                message: 'Successfully signed In',
                err: {}
            });
        } catch (error) {
        
            return res.status(500).json({
                message: 'something went wrong',
                data: {},
                success: false,
                err: error
            });
        }
    }
    const isAuthenticated = async (req, res) => {
        try {
            const token = req.headers['x-access-token'];
            const response = await userService.isAuthenticated(token);
            return res.status(200).json({
                success: true,
                err: {},
                data: response,
                message: 'user is authenticated and token is valid'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Something went wrong',
                data: {},
                success: false,
                err: error
            });
        }
    }   
    
module.exports={
    create,
    signIn,
    isAuthenticated
}