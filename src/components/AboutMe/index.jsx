import * as A from './styles'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import Aos from 'aos';
import "aos/dist/aos.css";
import ReactSkinview3d from "react-skinview3d"
import { useInView } from 'react-intersection-observer';
import { createFunctionAboutMe } from '../../functions';

export const AboutMe = () => {
 
  const [changeBooks, setChangeBooks] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [animation, setAnimation] = useState(false);
  
  const techs = ["TypeScript", "ReactJS e NodeJS", "Redux/Context", "Construir uma REST API", "MongoDB/MySQL (CRUD)", "Styled-Components"]
  const ores = ["diamondOre.png","ironOre.png", "goldOre.png", "emeraldOre.png", "redStoneOre.png", "coalOre.png"]

  useEffect(() => {
    Aos.init({ duration:2000 })
  },[]);

  const options={
    enableControls: false,
    animation: createFunctionAboutMe 
  }

  useEffect(() => {
    if(inView)
      setAnimation(true)
  },[inView] )


  return (
        <A.Container ref={ref} id="AboutMe">
          <A.TitleSkin animation={animation}>
            {animation && <ReactSkinview3d
                      options={options}
                      skinUrl="../../images/skin.png"
                      height="100"
                      width="100"
            /> }
            <A.TitleAbout>Sobre mim</A.TitleAbout>
          </A.TitleSkin>
          <A.Books changeBooks={changeBooks}>
            <A.AboutMe id="about">
                <A.Title> Quando tinha 11 anos, fiquei curioso sobre programação e criei um servidor de Minecraft. Embora não tenha me dedicado totalmente aos estudos naquela época, essa experiência me despertou o interesse pela programação. 
                  Aos 17 anos, comecei a estudar C e me apaixonei por construir algoritmos que ajudam as pessoas em suas vidas. </A.Title>
                  <Button onClick={()=>setChangeBooks(!changeBooks) } sx={{width:100, height:100, p:0, mt:"50px", ml:"403px" }} >
                    <img style={{ width: '100%', height:'100%' }} src={'../../images/seta.png'}></img>
                  </Button>
            </A.AboutMe>
            <A.AboutMe id="techs">
                <A.Techs>
                  <A.Title style={{ marginBottom:'5%'}}>Tecnologias que eu domino:</A.Title>
                  <A.Menu>
                      { techs.map((item, key) => ( 
                      <A.Title key={key}>
                          <img src={`../../images/${ores[key]}`}></img> {item}
                      </A.Title>))}
                  </A.Menu>
                  <Button onClick={()=>setChangeBooks(!changeBooks) } sx={{width:115, height:115, ml:"68px", mt:"160px" }} >
                    <img style={{ width: '100%', height:'100%'}} src={'../../images/seta.png'}></img>
                  </Button>
                </A.Techs>               
            </A.AboutMe>    
          </A.Books>  
      </A.Container>
  )
}