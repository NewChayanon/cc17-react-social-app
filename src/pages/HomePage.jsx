// import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()
  const handleClick = () => {
    let isValid = true
    if (isValid) navigate("/profile")
    else navigate("/login")
  }
  return (
    <div>
      <div>HomePage</div>
      <Link to="/login">Loginpage </Link>
      <Link to="/profile"> Profilepage</Link>
      <button onClick={handleClick}>Go to 404</button>
    </div>
  )
}

export default HomePage