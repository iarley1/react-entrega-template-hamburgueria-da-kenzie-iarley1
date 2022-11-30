import styled from 'styled-components'

export const StyleProductList = styled.ul `
    display: flex;
    gap: 15px;
    overflow-x: auto;
    list-style: none;
    margin-top: 30px;
   
@media(min-width: 721px) {
    width: 940px;
    height: 735px;
    flex-wrap: wrap;
    overflow-x: visible;

   h5 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 735px;
    font-size: 26px;
    }
       
}
`