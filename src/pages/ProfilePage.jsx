// import React from 'react'

import { Link } from "react-router-dom"

function ProfilePage() {
  return (
    <>
      <div>ProfilePage</div>
      <Link to="/">HomePage</Link>
      <Link to="/login">LoginPage</Link>
    </>
  )
}

export default ProfilePage