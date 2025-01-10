const express=require('express');
const bodyParser=require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./service/email-service');
const TicketController=require('./controllers/ticket-controller');
const jobs=require('./utils/jobs');

const setupAndStartServer = () =>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);
    
    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     // 'support@admin.com',
        //     'samgupta9142@gmail.com',
        //     'This is a test email',
        //     'whats the issue we want to know the reason so that we can improve in the further interactions'
        // );
    });
}
setupAndStartServer();

