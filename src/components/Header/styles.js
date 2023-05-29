import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:110vh;
  background: url(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/21bb7a65-c70d-414d-b0f4-434f4668b9b9);
  background-size: 100% 100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  overflow-y:hidden;

  
  .imgUp{
    width:25px;
    height:25px;
    border:3px solid #707070;
    top:1%;
    right:2%;
    position:fixed;
    z-index:1;
    border-radius:45px;
    padding:8px;
    cursor:pointer;
    transition: opacity 0.5s ease;

    img{
      width:100%;
      height:100%;
      transform: rotate(-45deg);
      transition:0.5s;
    }
    transition:0.5s;

    :hover{
      transform: scale(1.05);
      img{
        transform: rotate(-45deg) scale(1.05);
      }
    }
}

.imgDown{
    width:25px;
    height:25px;
    border:3px solid #707070;
    top:90%;
    right:2%;
    position:fixed;
    z-index:1;
    border-radius:45px;
    padding:8px;
    cursor:pointer;
    transition: opacity 0.5s ease;

    img{
      width:100%;
      height:100%;
      transform: rotate(135deg);
      transition:0.5s;
    }

    transition:0.5s;
    
    :hover{
      transform: scale(1.05);
      img{
        transform: rotate(135deg) scale(1.05);
      }
    }
}
`;

export const HeaderTop = styled.div`
  display:flex;
  justify-content:space-evenly;
  width:100%;
  height:10%;
`;

export const Logo = styled.div`
  width:45%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  font-size:32px;

  h1{
    margin:0;
  }
`;

export const Menu = styled.div`
  width:55%;
  height:100%;
  display:flex;

  a{

    text-decoration:none;
  }
`;

export const Skin = styled.div`
  width:100%;
  height:70%;
  display:flex;
  align-items: center;
  justify-content:space-around;
`;

export const SkinTexts = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
`;

export const Title = styled.h1`
  margin:0;
  padding:0;
  color:white;
  font-size:32px;
  font-weight:normal;
  
  span{
    font-weight:bold;
    font-size:36px;
  }
`;

export const SubTitle = styled.p`
  margin:0;
  padding:0;
  color:white;
  font-size:26px;
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

  img{
    margin:0px;
    padding:0;
    opacity:0;
    margin-left:10px;
    width:20px;
    height:20px;
    transition:.1s;
    animation: balance .5s infinite;
  }

  a{
    color:white;
    font-size:18px;
    transition:1s;

    :hover{
      color:green;
      transform:scale(1.05);
    }
    
  }

  @keyframes balance{
    0%{
      transform: rotate(0deg)
    }
    50%{
      transform: rotate(15deg)
    }
    100%{
      transform: rotate(-15deg)
    }
  }
`;

export const Span = styled.span(({ inView }) => (`
  opacity:${ inView ? '1' : '0'};
`));