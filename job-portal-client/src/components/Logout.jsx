import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'

const Logout = () => {
    const {LogOutUser}= useAuth();
    useEffect(() => {
     LogOutUser()
    }, [LogOutUser])
  return (
    <Navigate to="/login"/>
  )
}

export default Logout
