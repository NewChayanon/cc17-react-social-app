// import React from 'react'

import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <>
      <div> LoginPage </div>
      <Link to="/">HomePage</Link>
      <Link to="/profile">Profile</Link>
    </>
  )
}

export default LoginPage