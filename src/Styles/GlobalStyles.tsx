import { createGlobalStyle } from "styled-components";
import GmarketSansTTFMedium from './Assets/fonts/GmarketSansTTFMedium.ttf'

const GlobalStyle = createGlobalStyle`
    body{
        margin : 0;
        padding : 0;
    }
    @font-face{
        font-familiy : GmarketSansTTFMedium;
        src : url(${GmarketSansTTFMedium});
    }
`;

export default GlobalStyle;