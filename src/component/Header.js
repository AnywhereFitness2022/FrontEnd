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

 const HeadTitle = styled.h1`
        color:rgb(230,242,255);
        background-color: #6495ED;
        -webkit-box-shadow: 5px 1px 15px 5px #000000; 
box-shadow: 5px 1px 15px 5px #000000;
font-size: 60px;
      };`

      const HeadStyle = styled.div`
      background-color: rgba(28,110,164,0.39);
      padding-bottom: 20px;
      padding-left: 40px;
     padding-right: 40px;
     padding-top: 6px;

      a.button:hover{
        background-color:rgba(28,110,164,0.39);
      }

      a.home-button:hover {
  background-color: rgba(28,110,164,0.39);
}
      `
 

function Header() {
  return (
    <HeadStyle className="header">
    <HeadTitle> Anywhere Fitness </HeadTitle>
            <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="nav">

                    <Link className="home-button" to='/' style ={linkStyle}>Home</Link>
                    <Link className="button" to='/classes'style ={linkStyle}>Classes</Link>
                    <Link className="button" to='/login'style ={linkStyle}>Login</Link>
                    <Link className="button" to='/signup' style ={linkStyle}>Register</Link>
                    <Link className="button" to='/logout' style = {linkStyle}>Sign Out</Link>

                    </div>
                  </div>
               </div>
            </div>
       </HeadStyle>
  )
}

export default Header;