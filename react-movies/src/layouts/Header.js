import styled from "styled-components";
import fundoSite from "../assets/img/fundoSite.png"


export const PropsHome = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #808080;
color: white;
font-size: 3vh;
width: 80%;
margin: auto;
font-family: -apple-system, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Logo = styled.div`
height:70vh;    
background-image: url(${fundoSite}) ;
background-position: center;
width: 80%;
margin: auto;
`