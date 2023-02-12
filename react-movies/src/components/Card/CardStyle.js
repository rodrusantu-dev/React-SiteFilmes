import styled from "styled-components";
import { Link } from "react-router-dom";


export const MainContainer = styled(Link)` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border: 2px solid #808080;
text-decoration: none; 
color: #000;
border-radius: 5px;
:hover {
    cursor: pointer;
    border-color: red;
}

.infoContainer {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20%
    align-self center;
    font-size: 2vh;
}

img{
    width: 100%;
    height: 100%;
}

` 