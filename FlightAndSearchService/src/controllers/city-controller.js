const { CityService }= require('../services/index');
const { SuccessCodes }=require('../utils/error-codes');
const cityService=new CityService();

//POST-> /city
const create= async (req,res)=>{
    try {
        const city= await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:city,
            success:true,
            message:'successfully created a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        });
    }
}
//DELETE->/city/:id
const destroy= async (req,res)=>{
    try {
        const response= await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'successfully deleted a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to destroy the city',
            err:error
        });
    }
}
//PATCH->body/:id->req.body
const update= async (req,res)=>{
    try {
        const response= await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:response,
            success:true,
            message:'successfully updated a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update a city',
            err:error
        });
    }
}
//GET-> /city/:id
const get= async (req,res)=>{
    try {
        const response= await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'successfully fetched a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the city',
            err:error
        });
    }
}
const getAll= async (req,res)=>{
    try {
        const cities= await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data:cities,
            success:true,
            message:'successfully fetched all cities',
            err:{}
        });
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch cities',
            err:error
        });
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}