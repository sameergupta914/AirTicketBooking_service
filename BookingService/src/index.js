const express=require('express');
const app=express();

const { PORT }=require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes=require('./routes/index');
const db=require('./models/index');

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // app.get('/api/v1/home', (req, res)=>{
    //     return res.json({ message: 'hitting the booking service' });
    // })
    app.use('/api', apiRoutes);
    
    app.listen(PORT, ()=>{
        console.log(`server started on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
    })

}
setupAndStartServer(); 