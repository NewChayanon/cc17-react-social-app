// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";


function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    let isValid = true;
    if (isValid) navigate("/profile");
    else navigate("/login");
  };
  return (
    <div>
      <div>HomePage</div>
      <Link to="/login">Loginpage </Link>
      <br />
      <Link to="/profile"> Profilepage</Link>
      <br />
      <Button
        endIcon={<DeleteIcon />}
        variant="contained"
        color="error"
        size="medium"
        disabled={false}
        onClick={handleClick}
        sx={{
          padding:"8px",
          color:"black"
        }}
      >
        Go to 404
      </Button>
    </div>
  );
}

export default HomePage;
