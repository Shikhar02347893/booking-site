import { Route, Routes } from 'react-router-dom'

import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import { useEffect } from 'react'
import ProfilePage from './pages/ProfilePage'
import PlacesPage from './pages/PlacesPage'
import AccomodationPage from './pages/AccomodationPage'
import PlacePage from './pages/PlacePage'
import BookingPage from './pages/BookingPage'
import BookingsPage from './pages/BookingsPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          {/* <Route path='/account/:subpage?' element={<ProfilePage />}/>
          <Route path='/account/:subpage/:action' element={<ProfilePage />}/> */}
          <Route path='/account' element={<ProfilePage />}/>
          <Route path='/account/places' element={<PlacesPage />}/>
          <Route path='/account/places/new' element={<AccomodationPage />}/>
          <Route path='/account/places/:id' element={<AccomodationPage />}/>
          <Route path='/place/:id' element={<PlacePage />}/>
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path='/account/bookings/:id' element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App
