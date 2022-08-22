import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router';

const Authorization = () => {
const user=useSelector(state=> state.user?.data);
console.log(user)
  return (
    <Outlet/>
  )
}

export default Authorization