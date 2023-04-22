import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #fff;
        color: hsl(200, 15%, 8%);
        font-size: 16px;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }  
`;

export default GlobalStyle;