const express=require('express');
const bodyParser=require('body-parser');

const { PORT }=require('./config/serverConfig');
const apiRoutes=require('./routes/index');
const db=require('./models/index');
const UserService=require('./services/user-service');

const app=express();

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);
    service=new UserService();

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter:true});
    // }
    app.listen(PORT, ()=>{
        console.log(`server started on port: ${PORT}`);
    });

}
prepareAndStartServer();