import  express from 'express';
import {createbookingseat,getbookedseat ,getbookingOfUser,cancelBooking} from '../controller/BookingController.js';
const router = express.Router();


// Create a new booking
router.post('/bookseat',createbookingseat);

// Get booking details 
router.get('/getbookedseat',getbookedseat );

// Get all booking for a user
router.get('/getdataByUserId/:id',getbookingOfUser);


// Cancel booking
router.patch('/cancelbooking/:id',cancelBooking);

export default router;