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
        min-width: 80px;
        background-color: var(--color-positive);
        border: none;
        margin: 5px;
    }
    button:hover {
        background: #AAAAAA;
        cursor: pointer;
        border: 1px solid #555555;
    }
    hr {
        width: 50%;
        margin 30px auto;
        color: var(--color-positive-dark);
    }
    input {
        background-color: var(--color-negative-dark);
        font-family: 'Quicksand', sans-seriff;
        height: 20px;
        width: 280px;
        padding: 5px;
        margin: 10px;
        border: 1px solid #a0a0a0;
        border-radius: 2px;
        color: var(--color-positive);
    }
    textarea {
        background-color: var(--color-negative-dark);
        font-family: 'Quicksand', sans-seriff;
        border: 1px solid #a0a0a0;
        border-radius: 2px;
        color: var(--color-positive);
        margin-left: 10px;
        min-width: 290px;
        min-height: 100px;
    }
`;

export default Base;