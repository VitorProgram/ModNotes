import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        padding: 0 1rem;
        background: #0f172a;
        color: #f8fafc;
        overflow-y: scroll;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::-webkit-scrollbar {
            width: 10px;   
        }
        &::-webkit-scrollbar-thumb {
            background-color: #1e293b;
            border-radius: 6px;
        }
    }
`

export default Globals