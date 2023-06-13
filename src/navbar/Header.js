import React, {useEffect} from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const currentUrl = window.location.pathname;
  const location = useLocation()

  const userLogin = useSelector(state => state.userLogin);
  const { user, loading, error } = userLogin;

  let output = <ResponsiveAppBar user={user}/>

  useEffect(() => {

  }, [location])

  if (currentUrl == '/login' || currentUrl == '/signup') {
    output =(<></>)
  }

  return (
    <>
    {output}
    </>
  )
}

export default Header