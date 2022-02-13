import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-title);
        margin-bottom: 2rem;

    }
    input{        
        width: 100%;
        height: 4rem;
        background-color: #E7E9EE;
        border-radius: 0.25rem;
        border: 1px solid #D7D7D7;
        padding: 0 1.5rem;
        & + input{
            margin-top: 1rem;
        }
        &::placeholder{
            color: var(--text-body);
            font-size: 1rem;
        }
    }
  
    button[type="submit"]{
        font-size: 1rem;
        width: 100%;
        height: 4rem;
        background-color: var(--green);
        margin-top: 1.5rem;
        border: none;
        border-radius: 0.25rem;
        color: var(--shape);
        font-weight: 600;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`

export const TrasanctionTypeContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin:1rem 0;
    
   
`
interface SelectBoxProps{
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33CC95',
    red: '#E52E40'
}

export const SelectBox = styled.button<SelectBoxProps>`
       height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.isActive 
            ? transparentize( 0.9, colors[props.activeColor ])
            : 'transparent' };
        border-radius: 0.25rem;
        border: 1px solid  #d7d7d7;
        transition: border-color 0.3s;
        &:hover{
            border-color: #aaa;
        }

        img{
            width: 20px;
            height: 20px;
            margin-right: 1rem;
        }
        span{
            font-size: 1rem;
            font-weight: 400;
            color: var(--text-title);
        }
`