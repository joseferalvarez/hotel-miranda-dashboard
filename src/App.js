import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppContainer } from './AppStyled';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from "./pages/Dashboard/Dashboard";
import Bookings from "./pages/Bookings/Bookings";
import Rooms from "./pages/Rooms/Rooms";
import NewRoom from "./pages/Rooms/NewRoom";
import Room from "./pages/Rooms/Room";
import Users from "./pages/Users/Users";
import NewUser from './pages/Users/NewUser';
import User from "./pages/Users/User";
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Navegation from './components/Navegation/Navegation';
import Topbar from './components/Topbar/Topbar';
import EditRoom from './pages/Rooms/EditRoom';
import Booking from './pages/Bookings/Booking';
import NewBooking from './pages/Bookings/NewBooking';
import { getUserLocal } from './actions/actionsLogin';
import EditUser from './pages/Users/EditUser';

function App() {
  return (
    <HashRouter>
      <AppContainer>

        <SetMenu>
          <Navegation></Navegation>
        </SetMenu>

        <div className='window-container'>
          <SetMenu>
            <Topbar></Topbar>
          </SetMenu>
          <Routes>

            {/* login and dashboard */}
            <Route path='/' element={
              <AuthProvider>
                <Dashboard />
              </AuthProvider>}
            />
            <Route path='/login' element={<Login />} />

            {/* bookings */}
            <Route path="/bookings" element={
              <AuthProvider>
                <Bookings />
              </AuthProvider>
            } />

            <Route path='/bookings/newbooking' element={
              <AuthProvider>
                <NewBooking />
              </AuthProvider>}
            />

            <Route path='/bookings/:idbooking' action={({ params }) => { }} element={
              <AuthProvider>
                <Booking />
              </AuthProvider>}
            />

            {/* rooms */}
            <Route path='/rooms' element={
              <AuthProvider>
                <Rooms />
              </AuthProvider>}
            />
            <Route path='/rooms/newroom' element={
              <AuthProvider>
                <NewRoom />
              </AuthProvider>}
            />
            <Route path="/rooms/:idroom" action={({ params }) => { }} element={
              <AuthProvider>
                <Room />
              </AuthProvider>}
            />

            <Route path="/rooms/editroom/:idroom" action={({ params }) => { }} element={
              <AuthProvider>
                <EditRoom />
              </AuthProvider>}
            />

            {/* contact */}
            <Route path="/contact" action={({ params }) => { }} element={
              <AuthProvider>
                <Contact />
              </AuthProvider>}
            />


            {/* users */}
            <Route path="/users" element={
              <AuthProvider>
                <Users />
              </AuthProvider>}
            />
            <Route path="/users/newuser" element={
              <AuthProvider>
                <NewUser />
              </AuthProvider>} />
            <Route path="/users/:iduser" action={({ params }) => { }} element={
              <AuthProvider>
                <User />
              </AuthProvider>}
            />
            <Route path="/users/edituser/:iduser" action={({ params }) => { }} element={
              <AuthProvider>
                <EditUser />
              </AuthProvider>}
            />

            <Route path="*" action={({ params }) => { }} element={<Dashboard />} />

          </Routes>
        </div>
      </AppContainer>
    </HashRouter>
  );
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.loginReducer);
  const auth = JSON.parse(localStorage.getItem("auth"));

  if ((user && token) || auth) {
    return (
      children
    )
  } else if ((!user || !token) && auth) {
    getUserLocal(dispatch);
    return (
      children
    );
  }
  else {
    return (
      <Navigate to="/login"></Navigate>
    )
  }
};

const SetMenu = ({ children }: { children: JSX.Element }) => {

  const { user, token } = useSelector((state) => state.loginReducer);
  const auth = JSON.parse(localStorage.getItem("auth"));

  if ((user && token) || auth) {
    return (
      children
    )
  }
}

export default App;
