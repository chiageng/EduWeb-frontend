import React, {useEffect} from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../components/Message';

function Header() {
  const currentUrl = window.location.pathname;
  const location = useLocation()

  const navigate = useNavigate();

  const userLogout = useSelector(state => state.userLogout);
  const { message} = userLogout;


  const userLogin = useSelector(state => state.userLogin);
  const { user, loading, error } = userLogin;

  let output = <ResponsiveAppBar user={user}/>

  useEffect(() => {
    if (message) {
      navigate('./login')
    }
  }, [userLogin, userLogout])

  if (currentUrl == '/login' || currentUrl == '/signup') {
    output =(<></>)
  }

  return (
    <>
    {message && <Message type="success">{message.message}</Message>}
    {output}
    </>
  )
}

export default Header