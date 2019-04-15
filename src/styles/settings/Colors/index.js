import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
    :root {
        --color-negative: #393e46;
        --color-negative-dark: #222831;
        --color-positive: #EEEEEE;
        --color-positive-dark: #818D92;
        --color-zero: #FFFFFF;
        --color-green-progress: #AAFFAA;
        --color-green-progress-hover: #DDFFDD;
    }
`;

export default Colors;