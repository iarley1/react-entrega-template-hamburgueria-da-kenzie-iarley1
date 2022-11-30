import styled from "styled-components";

export const StyleCardProduct = styled.li `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-blue);
    width: 250px;
    height: 346px;
    min-width: 250px;

    img {
        width: 100%;
        height: 200px;
        background-color: var(--color-grey-0);
    }
    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-gray-100);
    }
    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--color-gray-50);
    }
    span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color : var(--color-primary);
    }
    button {
        width: 106px;
        height: 40px;
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: var(--color-fixed-white);
        cursor: pointer;
    }
`