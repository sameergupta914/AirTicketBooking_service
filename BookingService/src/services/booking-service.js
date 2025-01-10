const axios=require('axios');

const { BookingRepository }=require('../repository/index');
const { FLIGHT_SERVICE_PATH }= require('../config/serverConfig');
const { ServiceError }= require('../utils/errors')
class BookingService{
    constructor(){
        this.bookingRepository= new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId=data.flightId;
            const getFlightRequestURL= `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response=await axios.get(getFlightRequestURL);
            const flightData= response.data.data;
            // return flightData;
            let priceOfTheFlight=flightData.price;
            if(data.noOfSeats > flightData.totalSeats){
                throw new ServiceError('Something went wrong in the service process',
                    'insufficient seats');
            }
            const totalCost= priceOfTheFlight * data.noOfSeats; 
            const bookingpayload={...data, totalCost};
            const booking=await this.bookingRepository.create(bookingpayload);
            const updateFlightRequestURL=`${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightRequestURL, {totalSeats: flightData.totalSeats- booking.noOfSeats});
            const finalbooking= await this.bookingRepository.update(booking.id, {status: "Booked"});
            return finalbooking;

        } catch (error) {
            if(error.name=='RepositoryError' || error.name=='ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }

    async updateBooking(bookingId,data){
        try {
            const booking=await this.bookingRepository.update(bookingId,data);
            return booking;
        } catch (error) {
            if(error.name=='RepositoryError' || error.name=='ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }
}
module.exports= BookingService;