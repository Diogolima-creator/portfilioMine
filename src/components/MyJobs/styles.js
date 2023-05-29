import styled from "styled-components";

export const Container = styled.div`
    background: url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/683cc742-54f2-4d71-94fe-df053f3be715);
    background-size: cover;
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction:Column;
    align-items:center;
    justify-content:center;
    overflow-y:hidden;
`;

export const ContainerShield = styled.div`
  width:100%;
  height:100%;
  background-color:black;
  position:absolute;
  margin-left:0px;
  opacity:.65;
`;

export const Title = styled.h1`
  color:white;
  margin-bottom:2%;
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

export const TitleMyJobs = styled.h1`
   color:white;
   margin:0;
   text-align:center;
`;

export const Project = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  z-index:1;
`;

export const Hotbar = styled.div(({opacity}) => (`
  display:flex;
  width:39%;
  height:13%;
  justify-content:start;
  align-items:center;
  background:url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/b6aaa359-97a3-41d7-a181-ae9961329fa7) no-repeat;
  background-size:100% 100%;
  opacity:${opacity ? '1' : '0'};
  transition: .3s;
  z-index:1;
`));

export const HotBarChoice = styled.div(({opacity}) => (`
    height:74px;
    width:84px;
    padding-left:${opacity === '1' ? '1.5%' : '0.4%'};
    padding-right:${opacity === '1' ? '2%' : '0.6%'};
    margin-left:${opacity === '1' ? '0%' : '1.50%'};
    margin-right:${opacity === '1' ? '0%' : '0.35%'};
    margin-top:${opacity === '1' ? '0%' : '1.25%'};
    margin-bottom:${opacity === '1' ? '0%' : '1.25%'};
    padding-top:${opacity === '1' ? '1.25%' : '0%'};
    padding-bottom:${opacity === '1' ? '1.25%' : '0%'};
    

    cursor:pointer;
    background:${opacity === '1' ? 'url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/e588ff85-6cb7-4c37-b9bb-9f1009a41fc0) no-repeat' : 'transparent'};
    background-size: 100% 100%;

    img{
      transition: .5s;
      width:100%;
      height:100%;
      margin:0%;
      margin-top:3px;
      opacity: ${opacity};
      object-fit: fill;
  }
`));

export const ProjectRight = styled.div`
  display:flex;
  flex-direction:Column;
`;

export const Paragraph = styled.p`
  color:white;
`;

export const Stack = styled.div``;

export const Buttons = styled.div`

`;