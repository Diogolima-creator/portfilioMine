/* eslint-disable react/prop-types */
import * as H from './styles'
import ReactSkinview3d from "react-skinview3d"
import { FunctionAnimation } from "skinview3d/libs/animation";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Header = () => {
  const items = [{title:"Sobre mim", ref:"#AboutMe"}, {title:"Meu Trabalho", ref: "#Resume"}, {title:"Trabalhos Feito", ref: "#MyJobs"}, {title:"Meu Contato", ref: "#Contact"}]
  const viewID = ['Header', 'AboutMe', 'Resume', 'MyJobs',  'Contact']
  const [posID, setPosID] = useState(0);
  const { ref, inView } = useInView({});

  const createFunction = new FunctionAnimation((player) => {

          const y = localStorage.getItem('posY')
          const x = localStorage.getItem('posX')

          player.rotation.y = x < 1600 ? (x*0.000312) - 0.5 : (x*0.000392) - 0.5
  
          player.skin.head.rotation.x = (y*0.000990);
          player.skin.head.rotation.y = x*0.000009;

          player.skin.rightArm.rotation.x = x < 900 ? (1.9*Math.pow(Math.E, -0.000000008*Math.pow(x,0.003*x))) - 1.78 : (y * 0.0015 - 1.88)
          player.skin.leftArm.rotation.x = x < 900 ? (1.9*Math.pow(Math.E, -0.000000008*Math.pow(x,0.003*x))) - 1.78 : (y * 0.0015 - 1.88)

      }
      )

  const options = {
        enableControls: false,
        animation: createFunction
    }

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
        localStorage.setItem('posX', clientX)
        localStorage.setItem('posY', clientY)

  };

  function scrollToElement(posID) {
    if(posID >= 0 && posID <= viewID.length){
      var element = document.getElementById(viewID[posID]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setPosID(posID)
  }


  return (
    <H.Container ref={ref} id="Header" onMouseMove={handleMouseMove}>
      <H.Span inView={!inView} className="imgUp" onClick={()=>scrollToElement(0)}><img src="https://github.com/Diogolima-creator/portfilioMine/assets/62246037/281ab7c2-0bd7-4d0f-b777-f9fa7be8c8fd"></img></H.Span>
      <H.Span inView={true} className="imgDown" onClick={()=>scrollToElement(posID+1)}><img src="https://github.com/Diogolima-creator/portfilioMine/assets/62246037/281ab7c2-0bd7-4d0f-b777-f9fa7be8c8fd"></img></H.Span>
            <H.HeaderTop>
                <H.Logo>
        <h1>DL</h1>
                </H.Logo>
                <H.Menu>
                {
                                items.map((item, key) => (
                                    <H.Item key={key}><a onClick={()=>setPosID(key+1)} href={item.ref}>{item.title}</a> <img src='https://github.com/Diogolima-creator/portfilioMine/assets/62246037/0e398d96-ba57-441e-b608-819d8d25eaf6'></img></H.Item>
                                ))
                }
                <H.Item style={{ marginRight:'5px' }}><a href='https://github.com/Diogolima-creator' target='_blank' rel="noreferrer" ><GitHubIcon /></a></H.Item>
                <H.Item style={{ marginRight:'5px' }}><a href='https://www.linkedin.com/in/diogo-lima1408/' target='_blank' rel="noreferrer"><LinkedInIcon/></a></H.Item>
                <H.Item style={{ marginRight:'5px' }}><a href='https://wa.me/5567996637373' target='_blank' rel="noreferrer"><WhatsAppIcon /></a></H.Item>
                <H.Item style={{ marginRight:'5px' }}><a href='https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a></H.Item>
                </H.Menu>
            </H.HeaderTop>

            <H.Skin>
                <H.SkinTexts>
                    <H.Title>Olá, eu sou <span>Diogo</span></H.Title>
                    <H.SubTitle>Desenvolvedor Junior usando as tecnologias</H.SubTitle>
                    <H.SubTitle>REACT.JS & NODE.JS</H.SubTitle>
                </H.SkinTexts>

                <ReactSkinview3d
                    options={options}
                    skinUrl="assets/skins.png"
                    height="500"
                    width="500"
                />
            </H.Skin>
    </H.Container>
  )
}