const express= require('express');
const morgan= require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit=require('express-rate-limit');
const axios=require('axios');

const app=express();
const PORT=3005;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, 
	limit: 5,
})

app.use(morgan('combined'));  //or tiny
app.use(limiter);
app.use('/bookingservice', async(req,res,next)=>{
    try {
        const response= await axios.get('http://localhost:3001/api/v1/isauthenticated', {
            headers:{
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success){
            next();
        }  else{
            return res.status(401).json({
                message:'unauthorised'
            })
        }
    } catch (error) {
        return res.status(401).json({
            message:'unauthorised'
        })
    }
})
app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true}));
app.use('/authservice', createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: true}));
app.use('/flightAndSearchservice', createProxyMiddleware({ target: 'http://localhost:3000/', changeOrigin: true}));
app.get('/home', (req,res)=>{
    return res.json({
        message:'OK'
    });
})

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
});