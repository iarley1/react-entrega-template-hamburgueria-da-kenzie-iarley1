import styled from "styled-components";

export const Container = styled.div `
    .box {
        margin: 0 10px;
    }
    .spinner {
        width: 40px;
        height: 40px;
        border: 5px solid;
        border-radius: 50%;
        border-color: var(--color-primary) #e6e6e6 #e6e6e6 #e6e6e6;
        animation: loading 0.4s infinite;
        position: absolute;
        top: 30%;
        left: 50%;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media(min-width: 721px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        .box {
        margin-top: 90px;
        max-width: 100%;
        }

        .spinner {
            top: 52%;
            left: 33%;
        }

        div > div {
            display: flex;
            
        }
    }
`