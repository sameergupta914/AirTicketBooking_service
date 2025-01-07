const express=require('express');
const { AuthRequestValidators }=require('../../middlewares/index');
const UserController=require('../../controllers/user-controller');

const router=express.Router();

router.post(
    '/signup', AuthRequestValidators.ValidateUserAuth,
     UserController.create
    );
router.post(
    '/signin', AuthRequestValidators.ValidateUserAuth,
     UserController.signIn
    );
    router.get(
        '/isAuthenticated',
        UserController.isAuthenticated
    );
module.exports=router;