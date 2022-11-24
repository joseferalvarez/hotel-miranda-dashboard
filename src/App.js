import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useReducer, useContext } from 'react';
import { reduceLogin } from "./context/reduceLogin";
import LoginContext from './context/contextLogin';
import { AppContainer } from './AppStyled';

import Dashboard from "./pages/Dashboard/Dashboard";
import Bookings from "./pages/Bookings/Bookings";
import Guest from "./pages/Bookings/Guest";
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

function App() {

  const getLocalEmail = () => {
    return localStorage.getItem("login");
  }

  const [log, setLog] = useReducer(reduceLogin, JSON.parse(getLocalEmail()) || { auth: false, email: "" });

  return (
    <LoginContext.Provider value={[log, setLog]}>
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

              <Route path="*" action={({ params }) => { }} element={<Dashboard />} />

            </Routes>
          </div>
        </AppContainer>
      </HashRouter>
    </LoginContext.Provider>
  );
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [log,] = useContext(LoginContext);

  if (log.auth) {
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

  const [log,] = useContext(LoginContext);

  if (log.auth) {
    return (
      children
    )
  }
}

export default App;
