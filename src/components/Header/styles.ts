import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);


`

export const Content = styled.div`
    margin: 0 auto;
    max-width: 70rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  2rem 1rem 9rem;


`

export const Button = styled.button`
    border: 0;
    background-color: var(--blue-light);
    padding: 0.75rem 2rem;
    border-radius: 0.25rem;
    color: var(--shape);
    font-weight: 600;
    font-size: 1rem;
   transition: filter 0.2s;
    &:hover{
       filter: brightness(0.9);
    }
`