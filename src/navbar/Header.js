import React, {useEffect} from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/universal/Message';
import axios from 'axios';
import { forceLogout } from '../actions/userActions';
import AdminAppBar from './AdminAppBar';
import { Box } from '@mui/material';

function Header() {
  const currentUrl = window.location.pathname;

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const userLogout = useSelector(state => state.userLogout);
  const { loading:logoutLoading, message } = userLogout;


  const userLogin = useSelector(state => state.userLogin);
  const { user, loading, error } = userLogin;

  const leftBar = useSelector(state => state.leftBar);
  const { open } = leftBar;


  let output = <ResponsiveAppBar user={user}/>

  useEffect(() => {
    if (message) {
      navigate('./login')
    }
  }, [userLogin, userLogout])

  // if not staff, not able to navigate staff page
  useEffect(() => {
    if (currentUrl.includes("admin") && user && !user.user.is_instructor && !user.user.is_staff && !user.user.superuser) {
      navigate("/")
    }
  }, [currentUrl, open])


  // check token expired and logout automatically when token expired
  axios.interceptors.response.use(
    function (response) {
      // any status code that lie within the range of 2XX cause this function to trigger
      return response;
    },
    function (error) {
      // any status codes that falls outside the range of 2xx cause this function to trigger
      let res = error.response;
      if (res.status === 401) {
        return new Promise((resolve, reject) => {
          axios.get('/api/logout')
          .then(data => {
            console.log("/401 error > logout")
            dispatch(forceLogout());
          })
          .catch(err => {
            console.log("AXIOS INTERCEPTORS ERR", err)
            reject(error);
          })
        })
      }
      return Promise.reject(error);
    }
  )

  if (currentUrl == '/login' || currentUrl == '/signup' || currentUrl == '/admin/login' || currentUrl == 'admin/signup') {
    output =(<></>)
  } else if (currentUrl.includes("admin")) {
    output = (<AdminAppBar user={user}></AdminAppBar>)
  }

  return (
    <>
    {message && <Message type="info">{message.message}</Message>}
    {output}
    </>
  )
}

export default Header