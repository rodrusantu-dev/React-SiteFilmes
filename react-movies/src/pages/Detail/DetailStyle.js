import styled from "styled-components";

export const MainContainer = styled.div`
img {
    width: 100%;
    height: 100%;
}
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 35% 65%;
height: 100%;
`

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2vh;
p {
    font-size: 3vh;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 27vh;
    border-radius: 1.5vh;
    background-color: #c62823;
    color: #fff;
    text-decoration: none;
    :hover {
        opacity: 0.9;
    }
}

`
