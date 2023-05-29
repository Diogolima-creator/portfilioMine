import styled from "styled-components";

export const Container = styled.div`
    background: url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/0e0db0d2-0c18-4a18-87a5-abf6c5abc778);
    background-size: cover;
    width: 100vw; 
    height: 100vh;
    display:flex;
    flex-direction:Column;
    align-items:center;
    justify-content:start;
    overflow-y:hidden;      
`;

export const TitleSkin = styled.div(({animation}) => (`
    display:${animation ? 'flex' : 'none' };
    align-items:center;
    justify-content:start;
    height:10%;
`));

export const TitleContact = styled.h1`
   color:white;
   margin:0;
   text-align:center;
`;

export const Title = styled.h1`
  color:white;
  z-index:1;
`;

export const ContactAndPhrase = styled.div`
   display:flex;
   justify-content:space-around;
   width:100%;
   height:80%;
   align-items:center;
   z-index:1;

   .Phrase{
    font-size:20px;
    font-weight:400;
    font-style:italic;
    color:snow;
   }
`;

export const Phrase = styled.div`
   width:35%;
   display:flex;
   height:100%;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   text-align:center;
`;  

export const Contact = styled.div`
   width:30%;
   min-height:60%;
   max-height:100%;
   background-color: rgba(0,0,0, 0.7);
   border-radius:15px;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   display:flex;
   flex-direction:column;   
   align-items:center;
`;


export const SocialIcons = styled.div`
   display:flex;
`;

export const Item = styled.div`
  margin:40px 15px;
  cursor:pointer;
  display:flex;

  :hover{
    img{
      opacity:1;
    }
  }

  a{
    color:white;
    font-size:18px;
    transition:1s;

    :hover{
      color:black;
      transform:scale(1.05);
    }
    
  }

`;
