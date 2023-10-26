import React, {useRef, useContext} from 'react';
import axios from 'axios';
import AuthContext from "../state/AuthContext"


const AuthScreen = () => {
  const usernameRef = useRef();
  const passRef = useRef();
  const {dispatch} = useContext(AuthContext)

  let register = () => {
    let newUser = {
      username: usernameRef.current.value,
      password: passRef.current.value
    }
    axios.post('/api/register', newUser)
    .then((res) => {
      dispatch({type: 'LOGIN', payload: res.data})
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  let login = () => {
    let userInfo = {
      username: usernameRef.current.value,
      password: passRef.current.value
    }
    axios.post('/api/login', userInfo)
    .then((res) => {
      console.log(res)
      dispatch({type: 'LOGIN', payload: res.data})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
    <div className='auth_screen'>
      <div className='overall_auth'>
      <div className='auth_stuff'>
        <input type="text"
        placeholder='Username' ref={usernameRef} />
        <input type="text"
        placeholder='Password' ref={passRef} />
        </div>
        <div className='auth_btns'>
      <button className='left-btn' onClick={register}>Register</button>
      <button className='right-btn' onClick={login}>Login</button>
        </div>
    </div>
    </div>
  )
}

export default AuthScreen;
