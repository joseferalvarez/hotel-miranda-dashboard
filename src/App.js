import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from "./pages/dashboard"
import Bookings from "./pages/bookings"
import Guest from "./pages/guest"
import Rooms from "./pages/rooms"
import Newroom from "./pages/newroom"
import Room from "./pages/room"
import Users from "./pages/users"
import Newuser from './pages/newuser'
import User from "./pages/user"
import Login from './pages/login';
import Navegation from './components/navegation';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  background-color: #F8F8F8;
`;


function App() {

  return (
    <HashRouter>
      <AppContainer>
        <Navegation width={"20%"}></Navegation>
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
      </AppContainer>
    </HashRouter>
  );
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [loged] = useState(localStorage.getItem("login"));

  if (loged) {
    return (
      children
    )
  } else {
    return (
      <Navigate to="/login"></Navigate>
    )
  }
}
export default App;
