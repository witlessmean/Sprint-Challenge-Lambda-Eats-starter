import React from 'react'
import styled, { keyframes } from 'styled-components'
import PizzaHome from './images/PizzaHome.jpg'
import {NavLink} from 'react-router-dom'

const StyledH1 = styled.h1`
font-family: 'Permanent Marker', cursive;
display: flex;
justify-content: center;
align-items: center;
font-weight: bolder;
font-size: 5rem;
background: -webkit-linear-gradient(#e12301, #e1d800, #dba24a, #ce0000, #ce0000);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: 5px 5px #000000;`

const StyledImg = styled.img`
width: 70vw;
height: auto;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
opacity: 0.8`

const move = keyframes`
from {left: 0px;}
to {left: 200px;}`

const ArrowMore = styled.div`border: solid black;
border-width: 0 30px 30px 0;
display: inline-block;
padding: 30px;
transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: relative;
  animation: ${move} infinite 2s;
  `


const HomeC = () => {
    return (
        <>
        <StyledH1> 123 Pizza  </StyledH1>
           <StyledImg alt="ok" src={PizzaHome} style={{marginBottom: '50px'}}/>
         
        <NavLink style={{borderRadius: "8px", display: 'block' ,textAlign: 'center', backgroundColor: 'rgb(234, 56, 20, 0.7)', textDecoration: 'none', fontFamily: 'permanent marker', fontSize: "3rem"}} to="/pizzamaker">  <ArrowMore /> </NavLink> 

           </> 
    

    )
}

export default HomeC

//font-family: 'Permanent Marker', cursive;

