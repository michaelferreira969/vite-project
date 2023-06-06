import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        display: grid;
        grid-template-columns: 50% 50%;
    
        background-color: #F8FAFC;
    }

    h1 {
        font-size: 1.4rem;
        display: block;
        margin-bottom: .6rem;
    }
    
    h2 {
        font-size: .8rem;
        color: #475569;
        font-weight: 100;
    
        margin-bottom: 2rem;
    }
`