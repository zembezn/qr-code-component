import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: hsl(212, 45%, 89%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-size: 15px;
    width: 100%;
    justify-content: center;
}

img {
    width: 100%;
    border-radius: 12px;
}

text {
    padding: 22px 10px;
}

h2 {
    font-size: 22px;
    padding-top: 20px;
    color: hsl(218, 44%, 22%);
    padding-bottom: 15px;
}

p {
    color: hsl(220, 15%, 55%);
    padding-bottom: 16px;
}

`

export default GlobalStyles