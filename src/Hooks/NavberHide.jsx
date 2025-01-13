
import React, { useEffect } from 'react'
import { useNavigate ,Outlet } from 'react-router-dom';

function ProtectedRouts() {
  let navigate = useNavigate();
  
  useEffect(() => {
   localStorage.setItem('navberhide',true);

  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouts;
