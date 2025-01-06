const express=require("express");
const { PORT }=require('./config/serverconfig');
const bodyParser=require('body-parser');
const ApiRoutes=require('./routes/index');

const db=require('./models/index');
// const {Airplane}=require('./models/index');   

const setupAndStartServer=async ()=>{ 
    const app=express();
    app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
    app.use('/api', ApiRoutes);


    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        

        
    });
}
setupAndStartServer();