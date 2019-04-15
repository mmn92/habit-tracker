import styled from 'styled-components';

export const HeaderElement = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-negative-dark);
    height: 100px;
    width: 100vw;
    padding: 0 10px;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: var(--color-positive);
`;