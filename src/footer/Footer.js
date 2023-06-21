import React, { useEffect } from 'react'
import ResponsiveFooter from './ResponsiveFooter'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Footer() {
  // let currentUrl = window.location.pathname;

  let output = <ResponsiveFooter/>

  const userLogout = useSelector(state => state.userLogout);
  const { message } = userLogout;

  const location = useLocation()
  let currentUrl = location.pathname

  const userLogin = useSelector(state => state.userLogin);
  const { user, loading, error } = userLogin;

  if (currentUrl == '/login' || currentUrl == '/signup') {
    output =(<></>)
  }

  useEffect(() => {
    if (currentUrl == '/login' || currentUrl == '/signup') {
      output =(<></>)
    } else {
      output = <ResponsiveFooter/>
    }
  }, [location])

  return (
    <>
      {output}
    </>
  )
}

export default Footer