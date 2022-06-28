import { createGlobalStyle } from "styled-components";
// import reset from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // 폰트
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);

    // css
    * {
        box-sizing: border-box;
    }

    section {
        width: 100%;
        height: 100vh;
        padding-top: 50px;
    }
`

export default GlobalStyle;
