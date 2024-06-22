import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import './App.css';
// import authService from './appwrite/auth';
// import { login,logout } from './store/authSlice';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import  { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading] = useState(false)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //     if (userData) { 
  //       dispatch(login({userData}))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  //   .finally(() => setLoading(false))
  // }, [])
  //conditional rendring 
  return !loading  ? (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  ) : (<h1>LOADING</h1>)
}

export default App;
