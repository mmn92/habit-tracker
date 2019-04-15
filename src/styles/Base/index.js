import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    body {
        font-family: 'Quicksand', sans-serif;
        background-color: var(--color-negative);
        color: var(--color-positive);
    }
    button {
        font-family: 'Quicksand', sans-serif;
        height: 35px;
        width: 80px;
        background-color: #CCCCCC;
        border: none;
        margin: 5px;
    }
`;

export default Base;