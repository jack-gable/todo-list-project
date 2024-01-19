import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
    
    ol {
        background-color: ${({ theme }) => theme.listBg};
    }

    li {
        color: ${({ theme }) => theme.listText};
    }

    label {
        color: ${({ theme }) => theme.label};
    }
`;
