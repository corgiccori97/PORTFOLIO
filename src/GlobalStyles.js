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
`

export default GlobalStyle;
