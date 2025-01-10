const { FlightService }=require('../services/index');
const { SuccessCodes }=require('../utils/error-codes');

const flightservice=new FlightService();

const create=async (req,res)=>{
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight= await flightservice.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:'successfully created a flight',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });
    }
}
const getAll=async(req,res)=>{
    try {
        const response=await flightservice.getAllFlightData(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data:response,
            success:true,
            message:'successfully fetched all flights',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        });
    }
}
const get = async (req, res) => {
    try {
        const response = await flightservice.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}
const update = async (req, res) => {
    try {
        const response = await flightservice.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        });
    }
}

module.exports={
    create,
    getAll,
    get,
    update
}