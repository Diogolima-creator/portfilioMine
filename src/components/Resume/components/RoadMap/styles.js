import styled from "styled-components";

export const RoadMap = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:start;
   width:40%;
   margin-top:40px;
   p{
    margin:0px;
   }
`;

export const RoadMapItem = styled.div`
   display:flex;
   align-items:center;
   justify-content:start;
   flex-direction:column;
   width:100%;
   
`;

export const RoadMapItemTitle = styled.div(( {url} ) => (`
    width:26%;
    height:20px;
    background-color:#d24d57;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:7px;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background:url(${url}) ;
    background-size: 30% 100%;

    p{
      display:flex;
      color:white;
      font-size:16px;
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,.5);
      border-radius:5px;
      align-items:center;
      justify-content:center;
    }

    img{
      margin:0px 5px;
      width:25px;
      height:25px;
    }
`));

export const RoadMapItemRightLeft = styled.div`
   display:flex;
   color:white;
   width:95%;
   
   p{
    width:100%;
    font-size:13px;
    padding:5px;
    display:flex;
    align-items:center;
    
    img{
      margin:0 5px;
      width:25px;
      height:25px;
    }
   }
`;

export const RoadMapItemRight = styled.div`
   display:flex;
   flex-direction:Column;
   align-items:Center;   
   width:100%;
   height:100%;
   border-left:1px solid rgba(237, 237, 237, 0.5);
   justify-content:start;
   padding:10px;
   
`;

export const RoadMapItemLeft = styled.div`
    display:flex;
    flex-direction:Column;
    align-items:start;
    width:100%;
    height:100%;
    border-right:1px solid rgba(237, 237, 237, 0.5);
    justify-content:center;
    padding:10px;
   
    
`;