import React, { useState, useEffect } from 'react';
import './logo.css'; // Make sure to create this CSS file for styling






import styled, { keyframes } from 'styled-components';




  const Logo = () => {
 const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);




  return (

      <div className="logocontainer">
      
     <div className={`luffy ${isLoading ? 'show' : 'hide'}`}> 
      <h1 className="fadeOut"> LM </h1> <br/>
       <p>Aryan Mamania</p>
  
      </div>
      </div>
  )
}

export default Logo;
