const { user, Role }=require('../models/index');
const ValidationError = require('../utils/validation-error');

class UserRepository{

    async create(data) {
        try {
            const User = await user.create(data);
            return User;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            if(error.name == 'SequelizeUniqueConstraintError') {
                throw new ValidationError(error);
            }
            console.log("Something went wrong on repository layer");
            throw error;
        } 
    }
    async destroy(userId) {
        try { 
            await user.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async getById(userId) {
        try {
            const User = await user.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return User;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async getByEmail(userEmail) {
        try {
            const result = await user.findOne({
                where:{
                    email:userEmail
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async isAdmin(userId){
        try {
            const User=await user.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return User.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

}
module.exports = UserRepository;