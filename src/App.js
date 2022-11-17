import './App.css';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';

import Dashboard from "./pages/dashboard"
import Bookings from "./pages/bookings"
import Guest from "./pages/guest"
import Rooms from "./pages/rooms"
import Newroom from "./pages/newroom"
import Room from "./pages/room"
import Users from "./pages/users"
import Newuser from './pages/newuser'
import User from "./pages/user"
import Login from './pages/Login/Login';
import Contact from './pages/contact';
import Navegation from './components/Navegation/Navegation';
import styled from 'styled-components';
import Topbar from './components/Topbar/Topbar';

const AppContainer = styled.div`
  display: flex;
  background-color: #F8F8F8;
  .window-container{
    width: 100%;
    min-height: 100vh;
  }
`;

const MenuProvider = createContext(false);

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
            <Route path='/bookings/:idguest' action={({ params }) => { }} element={
              <AuthProvider>
                <Guest />
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
                <Newroom />
              </AuthProvider>}
            />
            <Route path="/rooms/:idroom" action={({ params }) => { }} element={
              <AuthProvider>
                <Room />
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
                <Newuser />
              </AuthProvider>} />
            <Route path="/users/:iduser" action={({ params }) => { }} element={
              <AuthProvider>
                <User />
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

  if (localStorage.getItem("login")) {
    return (
      children
    )
  } else {
    return (
      <Navigate to="/login"></Navigate>
    )
  }
};

const SetMenu = ({ children }: { children: JSX.Element }) => {

  const [loged, setLogued] = useState(localStorage.getItem("login"));
  const location = useLocation();

  useEffect(() => {
    setLogued(localStorage.getItem("login"));
  }, [location]);

  if (loged) {
    return (
      children
    )
  }
}

export { MenuProvider };
export default App;
