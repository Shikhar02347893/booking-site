import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PlacesPage from './PlacesPage';
import AccountNav from '../components/AccountNav';

function ProfilePage() {
    const [redirect, setRedirect] = useState(null); 
    const {ready, user, setUser} = useContext(UserContext);
    let {subpage} = useParams();
    if(subpage === undefined){
        subpage = 'profile';
    }

    async function logout(){
        await axios.post('/logout')
        setRedirect('/')
        setUser(null);
    }

    if(redirect){
        return <Navigate to={redirect} />
    }

    if (!ready){
        return 'Loading...';
    }
    if(ready && !user && !redirect){
        return (
            <Navigate to={'/login'} />
        )
    }

    return(
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className='text-center max-w-lg mx-auto'>
                    Logged in as {user.name} ({user.email})<br />
                    <button className='primary max-w-sm mt-2' onClick={logout}>Logout</button>
                </div>
            )}
            {subpage === 'places' &&(
                <PlacesPage />
            )}
        </div> 
    )
}

export default ProfilePage
