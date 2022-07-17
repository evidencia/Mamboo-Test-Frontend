import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #a8e8f4;
        --box-body: #FFFFFF;
        --text-title: #7493fa;
        --text-alert: #f44336;
        --text-body: #919ba3;
        --body-prediction: #e2f7fc;
        --text-body-2: rgba(0, 0, 0, 0.7);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //1rem ---- 16px tamanho padrão da font

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 676px;
        background: #f0f2f5;
        padding: 30px;
        position: relative;
        border-radius: 0.24rem;
    }

    .modal {

        >* {
            color: var(--text-body-2);
            line-height: 1.5;
            padding: 10px 0;
        }

        h2 {
            font-size: 1.3rem;
            font-weight: 600;
        }
    
        h3 {
            font-size: 1.1rem;
            font-weight: 400;
        }  

        span {
            color: var(--text-body);
        }
        
        p {
            text-align: justify;
        }
    }

`;