import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -5rem;
    div{
        color: var(--text-title);
       
        padding: 1.5rem 2rem;
        background-color: var(--shape);
        border-radius: 0%.25rem;
        &.highlight-background{
            background-color: var(--green);
            color: var(--shape);
        }
    }
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    strong{
            display: inline-block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            
        }


 @media(max-width: 720px){
        display: block;
        div + div{
            margin-top: 1rem;
        }
       
    }
`