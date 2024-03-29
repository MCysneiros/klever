import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root { 
--background: #13142b;
--red:#920000;
--pink:#AA32B5;
--blue:#5429cc;
---text:#fff;
--text-body:#646464;
}
*{margin: 0;
padding: 0;
box-sizing: border-box;
}
body,input,textarea,button{
font-family: 'Roboto', sans-serif;
font-weight: 400;
color: var(--text);
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
}
html{
@media(max-width: 1080px){
  font-size: 93.75%;
  @media(max-width: 720px){
    font-size: 87.5%;
  }
}
body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
button{
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}
.react-modal-overlay{
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

`;
