import styled from "styled-components";


export const Title = styled.h1`
  color:white;
  margin-bottom:2%;
`;


export const Project = styled.div`
  width:70%;
  height:100%; 
  display:flex;
  align-items:center;

  z-index:1;

  img{
    width:100%;
    max-width:800px;
    max-height:500px;
    object-fit: contain;
  }
`

export const ProjectRight = styled.div`
  display:flex;
  flex-direction:Column;
  margin:0 50px;
`;

export const Paragraph = styled.p`
  color:white;
  text-align:justify;
  width:100%;
`;

export const Stack = styled.div``;

export const Buttons = styled.div`
  a{
    width:100%;
    padding:5px;
    height:100%;
    text-decoration:none;
    color:white;
  }
`;