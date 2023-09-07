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

  if (currentUrl == '/login' || currentUrl == '/signup' || currentUrl == '/admin/login' || currentUrl == 'admin/signup') {
    output =(<></>)
  }

  useEffect(() => {
    if (currentUrl.includes('/login') || currentUrl.includes('/signup') || currentUrl.includes("admin")) {
      output =(<></>)
    } else {
      output = <ResponsiveFooter/>
    }
  }, [location])

  if (currentUrl.includes('/login') || currentUrl.includes('/signup') || currentUrl.includes("admin")) {
    output =(<></>)
  } else {
    output = <ResponsiveFooter/>
  }

  return (
    <>
      {output}
    </>
  )
}

export default Footer