const { StatusCodes }=require('http-status-codes'); 
const { BookingService }=require('../services/index');

const { createChannel, publishMessage }=require('../utils/messageQueue');
const { REMINDER_BINDING_KEY }=require('../config/serverConfig');

const bookingService= new BookingService();

class BookingController{

    async sendMessageToQueue(req,res){
        const channel=await createChannel();
        const payload={
            data:{
                subject: 'This is a notification from from queue',
                content: 'trying to create ticket in db',
                recepientEmail: 'samgupta9142@gmail.com',
                notificationTime: '2025-01-15T12:00:00'
            },
            service: 'CREATE_TICKET'
        };
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        return res.status(200).json({
            message: 'Successfully published the event'
        });
    }
    
    async create(req, res){
        try {
            const response=await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully completed booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            });
        }
    }
    async update(req,res){
        try {
            const response=await bookingService.updateBooking(req.params.id, req.body);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully updated booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            });
        }
    }
}


module.exports=BookingController;