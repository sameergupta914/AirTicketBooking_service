const { AirportService }=require('../services/index'); 
const { SuccessCodes }=require('../utils/error-codes');

const airportService=new AirportService();

const create= async(req,res)=>{
    try {
        const airport= await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:airport,
            success:true,
            message:'successfully created a airport',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a airport',
            err:error
        });
    }
}

module.exports={
    create
}
