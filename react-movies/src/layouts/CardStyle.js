import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border: 1px solid #000;
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