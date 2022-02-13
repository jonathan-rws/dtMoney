import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background : #f8f2f5;
    --green: #33CC95;
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer; 
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-content{
    width: 100%;
    max-width: 36rem;
    position: relative;
    background-color: var(--background);
    padding: 4rem 3rem;
    border-radius: 0.25rem;
}
.react-modal-overlay{
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
button.close-modal{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: none;
        background-color: transparent;
        transition: filter 0.3s;
        & :hover{
            filter: brightness(0.8);
        }
    }

`

