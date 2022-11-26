import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

body {
    background-color: rgb(30, 25, 44);
    color: rgb(255, 255, 255);
}
`

export const Main = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`