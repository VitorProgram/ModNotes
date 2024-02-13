import styled from "styled-components";
import { InputElement } from "../Input/Input.style";

export const ContainerElement = styled.div`
    max-width: 72rem;
    margin: 2.5rem auto;
    padding: 20px 0;
    
    @media (min-width: 768px) {
        padding: 0;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 425px) {
        justify-content: start;
    }
`
export const Img = styled.img``

export const Form = styled.form`
    margin: 1.5rem 0;
`

export const Input = styled(InputElement)`
    margin-top: 1rem;
    font-size: 25px;

    @media (min-width: 425px) {
        font-size: 30px;
        margin-top: 2rem;
    }

    font: 500;
    border: none;
    background: none;
    letter-spacing: -0.025rem;
    outline: none;
    caret-color: #fff;
    color: #f5f5f5;

    &::placeholder {
        color: #64748b;
    }
`

export const HorizontalDivider = styled.div`
    height: 1px;
    background: #334155;
    margin-bottom: 1.5rem;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 250px;
    gap: 1.5rem;

    @media (min-width: 676px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`