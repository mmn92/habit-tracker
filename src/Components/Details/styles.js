import styled from 'styled-components';

export const HabitDetails = styled.div`
    width: 75%;
    min-height: 75vh;
    margin: 15px auto;
    padding: 10px;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 15px;
`;

export const Description = styled.h2`
    font-size: 25px;
    margin-bottom: 10px;
`;

export const SecondaryTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const UncheckedSquare = styled.button`
    height: 35px;
    width: 35px;
    background: #CCCCCC;
    border: solid black 1px;
    border-radius: 2px;
`;

export const CheckedSquare = styled.button`
    height: 35px;
    width: 35px;
    background-color: var(--color-green-progress);
    border: solid green 1px;
    border-radius: 2px;
    :hover {
        background-color: var(--color-green-progress-hover);
    }
`;