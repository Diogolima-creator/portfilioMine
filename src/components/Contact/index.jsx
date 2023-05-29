import * as C from './styles'
import { useState, useEffect } from 'react'
import ReactSkinview3d from "react-skinview3d"
import { useInView } from 'react-intersection-observer';
import { StyledTextarea} from '../../functions';
import { TextField, Button} from '@mui/material';
import { FunctionAnimation } from "skinview3d/libs/animation";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Contact = () => {

  const [ animation , setAnimation] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  
  useEffect(() => {
      if(inView)
        setAnimation(true)
    },[inView] )


   const createFunction = new FunctionAnimation((player, progress) => {
      const t = progress * 4;
      const y = localStorage.getItem('posY')
      const x = localStorage.getItem('posX')

      player.rotation.y = (x*0.000512) - 0.5 

      player.skin.head.rotation.x = (y*0.000990);
      player.skin.head.rotation.y = x*0.000009;

      player.skin.rightArm.rotation.x = -2.5;
      player.skin.rightArm.rotation.z = Math.sin((t) + Math.PI) * 0.03;
      player.skin.leftArm.rotation.x = 0
      

  }
  )

 const options2 = {
    enableControls: true,
    animation: createFunction
  }

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
        localStorage.setItem('posX', clientX)
        localStorage.setItem('posY', clientY)

  };

  return (
      <C.Container ref={ref} id="Contact" onMouseMove={handleMouseMove}>
        <C.TitleSkin animation={animation}>
              <C.TitleContact>Contato</C.TitleContact>
        </C.TitleSkin>
        <C.ContactAndPhrase>
          <C.Phrase>
          <ReactSkinview3d
                    options={options2}
                    skinUrl="https://github.com/Diogolima-creator/portfilioMine/assets/62246037/efcd8bdb-a846-4dc9-b13f-036c460c2694"
                    height="500"
                    width="500"
                />
            <C.Title className='Phrase'>NÃO É POSSÍVEL CHEGAR A LUGAR ALGUM SE VOCÊ NÃO SABE EXATAMENTE ONDE ESTÁ E AONDE QUER CHEGAR.</C.Title>
            <C.Title className='Phrase'>- DUDA MENDONÇA</C.Title>
          </C.Phrase>
          <C.Contact>
            <C.Title>Entre em contato!</C.Title>
            <TextField sx={{ backgroundColor:'rgba(255,255,255, .9)', m:1}} label="Nome" variant="filled" />
            <TextField sx={{ backgroundColor:'rgba(255,255,255, .9)', m:1}} label="Email" variant="filled" />     
            <StyledTextarea sx={{ backgroundColor:'rgba(255,255,255, .9)', m:1, minHeight:'10%',maxWidth:'80%'}} placeholder='Mensagem'/>
            <Button sx={{ background:'rgba(255,255,255, .9)', m:1, color:'black', ':hover': { backgroundColor: 'white', color:'black' }}} variant="contained">Enviar Mensagem</Button>
            <C.SocialIcons>
              <C.Item style={{ marginRight:'5px' }}><a href='https://github.com/Diogolima-creator' target='_blank' rel="noreferrer" ><GitHubIcon /></a></C.Item>
              <C.Item style={{ marginRight:'5px' }}><a href='https://www.linkedin.com/in/diogo-lima1408/' target='_blank' rel="noreferrer"><LinkedInIcon/></a></C.Item>
              <C.Item style={{ marginRight:'5px' }}><a href='https://wa.me/5567996637373' target='_blank' rel="noreferrer"><WhatsAppIcon /></a></C.Item>
              <C.Item style={{ marginRight:'5px' }}><a href='https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a></C.Item>
            </C.SocialIcons>
          </C.Contact>     
        </C.ContactAndPhrase>
      </C.Container> 
  )
}
