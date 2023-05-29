import styled from "styled-components";

export const Container = styled.div`
    background: url(../../images/12.png);
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:Column;
    align-items:center;
    justify-content:center;
    overflow-y:hidden;
`;

export const TitleSkin = styled.div(({animation}) => (`
    display:${animation ? 'flex' : 'none' };
    align-items:center;
    justify-content:start;
    width:20%;
    height:10%;
    animation: title 3s linear;
    @keyframes title{
        0%{
            transform: translateX(-500px);
        }
        100%{
            transform: translateX(0px);
        }
   }
`));

export const TitleAbout = styled.h1`
   color:white;
   margin:0;
   text-align:center;
`;

export const Books = styled.div(( { changeBooks } ) => (`

    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;

    #about{
        display:${changeBooks ? 'flex' : 'none'};
        background: url(../../images/livro1.png) no-repeat;
        background-size: 100% 100%;
    }

    #techs{
        display:${changeBooks ? 'none' : 'flex'};
        background: url(../../images/livro2.png) no-repeat;
        background-size: 100% 100%;

        img{
            transform: rotate(180deg);
            transform: scaleX(-1); 
        }
        
    }
    
`));

export const AboutMe = styled.div`
    display:flex;
    flex-direction:Column;
    align-items:start;
    justify-content:start;
    font-size:24px;
    border-radius:45px;
    z-index:2;
    width:600px;
    height:650px;
    
    p{
      margin:20%;
      margin-left:15%;
      margin-bottom:0%;
      width:70%;
      text-align:justify-all;
    }

    button{        
        :hover{
            img{
                opacity:1;
            }
        }
    }
    
    img{
        opacity:0;
        transition:0.3s;
    }

`;

export const Techs = styled.div`
    width:100%;
    height:100%;
`;

export const Title = styled.p`
    display:flex;

    img{
        opacity:1;
        animation: 2s balance-about infinite;
        @keyframes balance-about{
            0%{
              transform: rotate(0deg)
            }
            50%{
              transform: rotate(180deg)
            }
            100%{
              transform: rotate(360deg)
            }
          }
    }
`;

export const Menu = styled.div`
    p{
        margin:0;
        padding:0;
        margin-left:20%;
    }

    img{
        width:25px;
        height:25px;
        margin-right: 10px;
    }

`;

