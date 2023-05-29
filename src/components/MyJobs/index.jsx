import * as M from './styles'
import Aos from 'aos';
import ReactSkinview3d from "react-skinview3d"
import "aos/dist/aos.css";
import { useEffect, useState} from 'react';
import { useInView, InView} from 'react-intersection-observer';
import { createFunctionMyJobs } from '../../functions';
import { Projects } from './components/Projects';

export const MyJobs = () => {
  
  const items = [
    {
        name: 'Ensina Game',
        url: 'https://user-images.githubusercontent.com/62246037/189471668-b2e360dc-b4df-4ca6-81c6-1e2387c1590f.png',
        gitHub: 'https://github.com/Diogolima-creator/EnsinaGame',
        pageProject: 'https://ensina-game.vercel.app/home',
        text: 'Este foi um projeto do tema de fazer app que possam impactar as pessoas, e foi um dos projetos que mais tenho orgulho pois fiz com o intuito de ajudar na alfabetização da minha prima mais nova que esteve com dificuldades durante o ensino remoto para acompanhar as aulas, e o feedback dado por ela foi um dos motivos pelo qual escolhi programação.',
        stack: ['Front-end: ReactJS, TypeScript, Styled-components' ] 
    },
    {
        name: 'Finanças',
        url: 'https://user-images.githubusercontent.com/62246037/235319285-0e0d503f-9241-4256-95e0-674012e65614.jpeg',
        github: 'https://github.com/Diogolima-creator',
        pageProject: 'https://finan-front.vercel.app/',
        text:'Este projeto foi feito com o objetivo de ser um aplicativo de controle financeiro com recursos sociais integrados. Isso significa que você pode estabelecer novas amizades e criar grupos com seus amigos, colegas de trabalho e familiares, mantendo-os separados e organizados de forma individual.',
        stack: ['Front-end: ReactJS, TypeScript, Styled-Components, Firebase.','Back-end: NodeJS, TypeScript, ExpressJS']
    },
    {
        name: 'Curso Aula',
        url: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/bb58dee2-b0ae-4882-9a50-43cbdb46ee14',
        gitHub: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/ab4fd7e5-73bb-498a-8697-d7ed3ba23dc0',
        pageProject: 'https://frontend-curso.vercel.app/login',
        text:'Este foi o meu primeiro projeto em que adotei as práticas de Arquitetura Limpa (Clean Architecture) e Design Orientado a Domínio (Domain-Driven Design) no back-end, juntamente com o uso do TypeScript. Anteriormente, o projeto era totalmente desenvolvido em JavaScript e seguia uma abordagem baseada em Modelo-Visão-Controlador (MVC) no back-end. Apesar de ter sido completamente refeito, ainda apresenta alguns bugs que não existiam na versão anterior em JavaScript. Acabei deixando esse projeto de lado quando o Heroku interrompeu o suporte aos servidores gratuitos. No entanto, agora que adquiri mais conhecimento e também estou utilizando a Render para implantar meus projetos back-end, pretendo corrigir esses problemas e aprimorar o projeto, tornando-o semelhante ao projeto de finanças.',
        stack: ['Front-end: ReactJS, TypeScript, Styled-Components, Firebase.','Back-end: NodeJS, TypeScript, ExpressJS']
    },
    
    {
        name: 'Loja Virtual',
        url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/LojaVirtual.png?raw=true',
        gitHub: 'https://github.com/Diogolima-creator/LojaVirtual',
        pageProject: 'https://loja-virtual-bice.vercel.app/',
        text:'Este foi meu primeiro projeto usando NodeJS, com o intuito começar os estudos em backend, foi o primeiro sistema de cadastro e autenticação que fiz usando mongoDB. E também um dos desafios era conseguir criar um sistema de carrinho usando React-Context.',
        stack:['Front-end: ReactJS, Styled-Components','Back-end: NodeJS, Firebase(Storage)']
    },
    {
        name: 'Portfólio diretriz',
        url: 'https://github.com/Diogolima-creator/FoodMenu/assets/62246037/f2cc378c-ed43-4d90-ab83-c7aa3357c929',
        gitHub: 'https://github.com/Diogolima-creator/portifolio-diretriz',
        pageProject: 'https://portifolio-dad.vercel.app',
        text:'Portfólio feito para empresa diretriz M&C, ainda em desenvolvimento em espera do cliente.',
        stack:['Front-end: ReactJS, Styled-components']
    },
    {
        name: 'Food-Menu',
        url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/menuFood.png?raw=true',
        gitHub: 'https://github.com/Diogolima-creator/FoodMenu',
        pageProject: 'https://food-menu-delta.vercel.app/',
        text:'Este foi um projeto para ter uma landing page, e por em pratica as minhas skills de CSS e com JavaScript.',
        stack: ['Front-end: ReactJS, Styled-Components']

      },
    {
        name: 'Portifolio',
        url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Portifolio.png?raw=true',
        gitHub: 'https://github.com/Diogolima-creator',
        text:'Este é um projeto que eu estava usando como portfolio.',
        stack: ['Front-end: ReactJS, Styled-Components']
    }
]

const [projectChosen, setProjectChosen] = useState(0)
const [ animation , setAnimation] = useState(false)
const [inViewTitle, setInViewTitle] = useState(false)

const { ref, inView } = useInView({
  threshold: 0,
});

  const options={
    enableControls: false,
    animation: createFunctionMyJobs 
  }

useEffect(() => {
    if(inView)
      setAnimation(true)
  },[inView] )

useEffect(() => {
    Aos.init({ duration:2000 })
  },[]);

  const handleProjectChosen = (key) => {
    setProjectChosen(key)
  }

  return(
      <M.Container ref={ref} id="MyJobs">
        <M.ContainerShield></M.ContainerShield>
          <M.TitleSkin animation={animation}>
              {animation && <ReactSkinview3d
                        options={options}
                        skinUrl="(https://github.com/Diogolima-creator/portfilioMine/assets/62246037/efcd8bdb-a846-4dc9-b13f-036c460c2694"
                        height="100"
                        width="100"
              /> }
              <InView onChange={setInViewTitle}>
                <M.TitleMyJobs>Projects</M.TitleMyJobs>
              </InView> 
          </M.TitleSkin>
        <Projects item={items[projectChosen]}/> 
        {<M.Hotbar opacity={inViewTitle}>
          {items.map((item, key) => (
            <><M.HotBarChoice onClick={()=>handleProjectChosen(key)} opacity={key === projectChosen ? '1' : '0.5' }> <img src={item.url} key={key} /></M.HotBarChoice></>
          ))}
        </M.Hotbar>}
      </M.Container> 
  )
}