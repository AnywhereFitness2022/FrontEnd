import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
  border: "3px black solid",
  padding: "3px"
};

const FootStyle = styled.div`
background-color: rgba(28,110,164,0.39);
padding-top: 40px;
display: flex;
justify-content: center;
align-content: stretch;
align-items: stretch;
align-self: flex-end;
a.button:hover{
        background-color:rgba(28,110,164,0.39);
      }

      a.home-button:hover {
  background-color: rgba(28,110,164,0.39);
}
`;


const Footer = () => {

    return (
        <FootStyle className="footer-section">
                <div className="row">
                  
                    <div className="nav">

                    <Link className="home-button" to='/' style ={linkStyle}>Home</Link>
                    <Link className="button" to='/classes'style ={linkStyle}>Classes</Link>
                    <Link className="button" to='/login'style ={linkStyle}>Login</Link>
                    <Link className="button" to='/signup' style ={linkStyle}>Register</Link>
                    <Link className="button" to='/logout' style = {linkStyle}>Sign Out</Link>

                    </div>
                    
    <div className="copyright">
<p>
  Copyright 2022 | Privacy | Terms of Service
</p>
         </div>
      </div>
    </FootStyle>
    )
};

export default Footer;