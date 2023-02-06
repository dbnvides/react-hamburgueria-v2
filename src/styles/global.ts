import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  :root{
    --primary:      #27AE60;
    --primary-50:   #93D7AF;
    --secundary:    #EB5757;
    --grey-100:     #333333;
    --grey-50:      #828282;
    --grey-40:      #BDBDBD;
    --grey-30:      #999999;
    --grey-20:      #E0E0E0;
    --grey-0:       #F5F5F5;
    --warning:      #FFCD07;
    --sucess:       #168821;
    --information:  #155BCB;
    --white:        #ffff;

    --font: 'Inter';

    --title1:       26px;
    --title2:       22px;
    --title3:       18px;
    --title4:       14px;
    --headline:     16px;
    --caption:      12px;

    --bold:         700;
    --regular:      400;
    --semibold:     600;
  }
`;
