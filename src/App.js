import logo from './logo.svg';
import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';

import Dashboard from "./pages/dashboard"
import Reviews from "./pages/reviews"
import Bookings from "./pages/bookings"
import Guest from "./pages/guest"
import Rooms from "./pages/rooms"
import Newroom from "./pages/newroom"
import Room from "./pages/room"
import Users from "./pages/users"
import Newuser from './pages/newuser'
import User from "./pages/user"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/guest" element={<Guest />} />

        <Route path='/rooms' element={<Rooms />} />
        <Route path="/rooms/newroom" element={<Newroom />} />
        <Route path="/rooms/room/:idroom" element={<Room />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/newuser" element={<Newuser />} />
        <Route path="/users/user/:iduser" element={<User />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
