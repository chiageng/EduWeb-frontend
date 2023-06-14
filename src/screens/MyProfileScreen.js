import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../actions/userActions';
import { useLocation, useNavigate } from 'react-router-dom';

function MyProfileScreen() {
  const dispatch = useDispatch();
  const userLogin  = useSelector(state => state.userLogin)
  const navigate = useNavigate();
  const location = useLocation();
  
  const { loading, user, error } = userLogin;
  console.log(user.user);

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, location])

  return (
    <div>
      MyProfileScreen
      <p>{user.user.email}</p>
      <p>{user.user.picture}</p>
      <p>{user.user.is_staff}</p>
      <p>{user.user.is_superuser}</p>
    </div>
    
  )
}

export default MyProfileScreen