import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlaceAddress from '../components/PlaceAddress';
import PlaceGallery from '../components/PlaceGallery';
import BookingDates from '../components/BookingDates';
import { useParams } from 'react-router-dom'

function BookingPage() {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(()=>{
        if(id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if(foundBooking){
                    setBooking(foundBooking);
                }
            })
        }
    }, [id]);

    if(!booking){
        return '';
    }
    return (
        <div className='my-8'>
            <h1 className='text-3xl'>{booking.place.title}</h1>
            <PlaceAddress className='my-2 block' address={booking.place.address}/>
            <div className='bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl mb-4'>Your booking information:</h2>
                    <BookingDates booking={booking} />
                </div>
                <div>
                    <div className='flex gap-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                        <div>
                            Total price:
                        </div>
                    </div>
                    <div className='text-3xl'>${booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    )
}

export default BookingPage
