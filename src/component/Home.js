import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    border: "3px black solid",
    padding: "3px",
    backgroundcolor: "green"
  };
  

   const HomeStyle = styled.div`
 background-color: #B3D9FF;
 width: 100%;
 height: 100%;
 
 
h3.mission{
    border: 4px solid black;
    margin-left: 450px;
    margin-right: 450px;
    border-radius: 90
}

a.button:hover{
        background-color:rgba(28,110,164,0.39);
      }
   `;
 
 const ListStyle = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;
padding-right: 40px;
padding-bottom: 40px;
font-style: oblique;
font-size: 22px;
`;


const Home = () => {
    return(
        <HomeStyle>
            <div>
            <h2>Welcome to Anywhere Fitness!</h2>
            <h3 className = "mission">Where our mission is to allow you to attend a fitness class ANYWHERE!</h3>
            </div>
            <div>
                <div>
                <h3>New Client?</h3>
                <Link className = 'button' to='/signup' style ={linkStyle}>Sign Up Here</Link>
                </div>
                <div>
                <h3>Already have an Account?</h3>
                <Link className = 'button' to='/login' style ={linkStyle}>Client Login</Link>
                </div>
                <div>
                <h3>Are you an Instructor?</h3>
                <Link className = 'button' to='/login ' style ={linkStyle}>Instructor Login</Link>
                </div>
            </div>
           
                <h2>Some of the classes we offer:</h2>
                <ListStyle>
                <ul>
                    <li>Mindful Yoga</li>
                    <li>Kickboxing</li>
                    <li>HIIT</li>
                    <li>Spin</li>
                    <li>Cross-Fit</li>
                </ul>
            </ListStyle>
            
        </HomeStyle>
    )
};
export default Home;