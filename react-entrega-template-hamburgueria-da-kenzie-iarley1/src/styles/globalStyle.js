import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      --color-primary: #27ae60;
      --color-primary-50: #93d7af;
      --color-secondary: #eb5757;

      --color-gray-100: #333333;
      --color-grey-50: #828282;
      --color-grey-20: #e0e0e0;
      --color-grey-0: #f5f5f5;

      --color-fixed-white: #ffffff;
   }

   body {
    font-family: 'Inter', sans-serif;
   }
`