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

    a {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }

    a:hover {
        font-weight: bold;
        transition: 0.3s;
    }

    section {
        width: 90%;
    }

    form input {
        border: none;
    }
`

export default GlobalStyle;
