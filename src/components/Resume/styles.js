import styled from "styled-components";

export const Container = styled.div`
    background: url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/6bff5f30-91a5-40d5-8701-253cc19bb3a3);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:Column;
    align-items:center;
    justify-content:start;
    overflow-y:hidden;
`;

export const ContainerShield = styled.div`
    width:100%;
    height:100vh;
    margin-left:-20px;
    background-color:black;
    position:absolute;
    opacity:.65;
`;


export const TitleSkin = styled.div(({animation}) => (`
    display:${animation ? 'flex' : 'none' };
    align-items:center;
    justify-content:start;
    width:20%;
    height:10%;
    z-index:1;
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

export const TitleResume = styled.h1`
   color:white;
   margin:0;
   text-align:center;
`;

export const RoadMaps = styled.div`
   display:flex;
   width:100vw;
   margin-top:2%;
   z-index:1;
`;