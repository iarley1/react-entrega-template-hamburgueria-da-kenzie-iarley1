import styled from "styled-components";

export const StyleHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 139px;
    background-color: var(--color-grey-0);

    
    .div-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
    
    .div-header div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        border: 2px solid var(--color-grey-20);
        border-radius: 8px;
        
    }
    .div-header h1 > span{
        font-size: 20px;
        color: var(--color-secondary);
    }
    
    div > input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 10px;
        outline: none;
    }
    
    div > button {
        width: 107px;
        height: 40px;
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 8px;font-weight: 500;
        margin-right: 10px;
        font-size: 14px;
        line-height: 17px;
        color: var(--color-fixed-white);
        cursor: pointer;
    }

    @media(min-width: 721px) {
        display: flex;
        width: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
        height: 80px;
        left: 0;
        top: 0;

    .div-header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 1304px;
        height: 60px; 
    }
    .div-header div {
        width: 363px;  
    }
    }  
`