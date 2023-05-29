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
  const ores = ["https://github.com/Diogolima-creator/portfilioMine/assets/62246037/f79f66d0-b014-4f94-8c61-05752f29a878",
  "https://github.com/Diogolima-creator/portfilioMine/assets/62246037/51e5861b-feab-439c-984e-d88e124925c8",
  "https://github.com/Diogolima-creator/portfilioMine/assets/62246037/1f9d1036-59d6-4ab4-a8e0-973639ad7ddf", 
  "https://github.com/Diogolima-creator/portfilioMine/assets/62246037/dd6b0c3a-74f4-4bd5-b2ad-15b9c63ce8d3", 
  "https://github.com/Diogolima-creator/portfilioMine/assets/62246037/5ba5edf0-b95d-4a7f-aa71-db511c1239c7", 
  "https://github.com/Diogolima-creator/portfilioMine/assets/62246037/d6ecead8-3a8e-4aa5-8711-0897a77f82a1"]

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
                      skinUrl="https://github.com/Diogolima-creator/portfilioMine/assets/62246037/4df4addf-253b-4837-ac0c-33c2f0ab7974"
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
                    <img style={{ width: '100%', height:'100%' }} src={'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/989a5f7c-050a-4879-9d0a-69a3e6cf558f'}></img>
                  </Button>
            </A.AboutMe>
            <A.AboutMe id="techs">
                <A.Techs>
                  <A.Title style={{ marginBottom:'5%'}}>Tecnologias que eu domino:</A.Title>
                  <A.Menu>
                      { techs.map((item, key) => ( 
                      <A.Title key={key}>
                          <img src={ores[key]}></img> {item}
                      </A.Title>))}
                  </A.Menu>
                  <Button onClick={()=>setChangeBooks(!changeBooks) } sx={{width:115, height:115, ml:"68px", mt:"160px" }} >
                    <img style={{ width: '100%', height:'100%'}} src={'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/989a5f7c-050a-4879-9d0a-69a3e6cf558f'}></img>
                  </Button>
                </A.Techs>               
            </A.AboutMe>    
          </A.Books>  
      </A.Container>
  )
}