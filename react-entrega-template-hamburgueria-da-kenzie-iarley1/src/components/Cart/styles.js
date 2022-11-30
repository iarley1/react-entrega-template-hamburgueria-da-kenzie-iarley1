import styled from "styled-components";

export const StyleCart = styled.div `
    margin-top: 30px;

    h3 {
        display: flex;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 65px;
        background: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-fixed-white);
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 150px;
        background-color: var(--color-grey-0);
    }
    ul > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
        border-top: 2px solid var(--color-grey-20);
        margin-top: 20px;
        width: 100%;
    }
    ul div > div {
        padding: 0 20px;
    }
    ul div > button {
        width: 100%;
        height: 60px;
        background: var(--color-grey-20);
        border: 2px solid var(--color-grey-20);
        border-radius: 8px; 
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        max-width: 100%;
        color: var(--color-grey-50);
        cursor: pointer;

    }
    ul div > div {
        display: flex;
        justify-content: space-between;
    }
    ul > h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: var(--color-gray-100);
        margin-bottom: 10px;
    }
    ul > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: var(--color-grey-50);
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        margin-top: 20px;
        width: 90%;
        height: 80px;
    }
    li > img {
        width: 70px;
        height: 70px;
        background-color: var(--color-grey-20);
    }
    li > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 30%;
        position: absolute;
        left: 85px;
        top: 4px;
    }
    li div > h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-gray-100);
    }
    li div > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--color-grey-50);
    }
    li > button {
        width: none;
        height: none;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: var(--color-grey-50);
        cursor: pointer;
        background: none;
        border: none;
        position: relative;
        top: 10px;
    }
    @media(min-width: 721px) {
        width: 363px;
        flex-direction: column;
        min-width: 363px;
    } 
`