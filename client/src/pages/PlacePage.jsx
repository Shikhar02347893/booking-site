import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm';
import PlaceGallery from '../components/PlaceGallery';
import PlaceAddress from '../components/PlaceAddress';

function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState(null);
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        })
    },[id]);

    

    if(!place) return '';

    return (
        <div className='mt-4 py-8 bg-gray-100 -mx-8 px-8'>
            <h1 className='text-3xl'>{place.title}</h1>
            <PlaceAddress address={place.address} />
            <PlaceGallery  place={place} />
            <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]'>
                <div>
                    <div className='my-4'>
                        <h2 className='font-semibold text-2xl'>Description</h2>
                        {place.description}
                    </div>
                    Check-in: {place.checkIn} <br />
                    Check-out: {place.checkOut} <br />
                    Max number of guests: {place.maxGuests}
                </div>
                <div>
                    <BookingForm place={place} />
                </div>                    
            </div>
            <div>
                <h2 className='font-semibold text-2xl mt-8'>Extra Info</h2>
                <div className='mb-4 mt-1 text-sm text-gray-700 leading-5'>{place.extraInfo}</div>
            </div>
        </div>
    )
}

export default PlacePage
