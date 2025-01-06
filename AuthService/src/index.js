const express=require('express');
const bodyParser=require('body-parser');

const { PORT }=require('./config/serverConfig');
const apiRoutes=require('./routes/index');

const UserService=require('./services/user-service');

const app=express();

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);
    service=new UserService();
    // const newtoken=service.createToken({email:'sameer123@gmail.com',id:1});
    // console.log('new token is',newtoken);

    // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWVlcjEyM0BnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzM2MTkxNjI1LCJleHAiOjE3MzYxOTg4MjV9.jMvXEt-VNH6aa_KBk9wsTQxJ5gSOaTjsbW0EzVaBtyw';
    // const response=service.verifyToken(token);
    // console.log(response);
    app.listen(PORT, ()=>{
        console.log(`server started on port: ${PORT}`);
    });

}
prepareAndStartServer();