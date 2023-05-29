import * as R from './styles'
import { useEffect, useState } from 'react';
import ReactSkinview3d from "react-skinview3d"
import { useInView } from 'react-intersection-observer';
import { createFunctionResume } from '../../functions';
import RoadMap from './components/RoadMap';

export const Resume = () => {

  const [ animation , setAnimation] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const options={
    enableControls: false,
    animation: createFunctionResume 
  }

  useEffect(() => {
    if(inView)
      setAnimation(true)
  },[inView] )

  const RoadMapAcademy = [
    { date:'Academia', url:['../../images/funlec.png'], urlBack:'../../images/grass.png', left:[], right:['Funlec: Colégio Raul Sans de Matos'], dateEnd:'', dateIcon:'../../images/BookAndQuill.png'},
    { date:'2019-2020', url:['../../images/C.png','../../images/javascript.png'], urlBack:'../../images/dirt.png', left:['Inicio dos estudos de programação com C', 'Estudos de HTML/JAVASCRIPT/MYSQL e inicio de REACT'], right:[], dateEnd:''}, 
    { date:'2020-2024', url:['../../images/ufms.png'], urlBack:'../../images/stone.png', left:[], right:['UFMS: Bacherelado em Engenharia da Computação'], dateEnd:''},
    { date:'2021-2022', url:['../../images/react.png'], urlBack:'../../images/stone.png', left:['Estudos afinco de React e suas modulações'], right:[], dateEnd:''}, 
    { date:'2023', url:['../../images/udemy.png'], urlBack:'../../images/stone.png', left:[], right:['Curso React Avançado: Crie aplicações com NextJS, Strapi'], urlBackEnd:'../../images/bedrock.png', dateEnd:'Pós em I.A'},
  ]

  const RoadMapProfessional = [
    { date:'Projetos', url:['../../images/college.png'], urlBack:'../../images/grass.png', left:[], right:['Trabalhos na faculdade'], dateEnd:'', dateIcon:'../../images/pickaxe.png'},
    { date:'2019-2020', url:['../../images/podcast.png','../../images/ecommerce.png','../../images/rocketseat.png',
    '../../images/netflix.png','../../images/instagram.png'], urlBack:'../../images/dirt.png', left:['Trabalho de site de Podcast', 'Projeto Loja Virtual', 'RocketSeat - NLW', 'Clones-NetFlix', 'Clone Instagram - NEXT.JS'], right:[], dateEnd:''}, 
    { date:'2021-2022', url:['../../images/typescript.png'], urlBack:'../../images/stone.png', left:[], right:['Projeto Curso Aula com DDD/Solid e TypeScript'], dateEnd:''}, 
    { date:'2022-2023', url:['../../images/typescript.png', '../../images/icon.png'], urlBack:'../../images/stone.png', urlBackEnd:'../../images/bedrock.png', left:['Projeto Finanças com DDD/Solid e TypeScript', 'Freelancer para Diretriz Marketing & Consultoria'], right:[], dateEnd:'Dev. Jr ou Estágio'},
  ]

   
  const RoadMapAbilities = [
    { date:'Habilidades', url:['../../images/c.png', '../../images/python.png'], urlBack:'../../images/grass.png', left:[], right:['C', 'Python'], dateEnd:'', dateIcon:'../../images/jumpboost.png'},
    { date:'2020-2021', url:['../../images/javascript.png','../../images/react.png'], urlBack:'../../images/dirt.png', left:['JavaScript/HTML/CSS', 'React.JS e Styled-Components'], right:[], dateEnd:''}, 
    { date:'2021-2022', url:['../../images/react.png','../../images/nodejs.png','../../images/mongodb.png'], urlBack:'../../images/stone.png', left:[], right:['Redux, Context', 'API, NodeJS, ExpressJS', 'MongoDB'], dateEnd:''}, 
    { date:'2023', url:['../../images/cube.png','../../images/ddd.png','../../images/typescript.png', '../../images/jest.png'], urlBackEnd:'../../images/bedrock.png', urlBack:'../../images/stone.png', left:['Fundamentos de SOLID', 'Domain Drive Development', 'TypeScript', 'Teste Unitários/JEST'], right:[], dateEnd:'Next.JS e Java'},
  ]

  return (
        <R.Container ref={ref} id="Resume" >
          <R.ContainerShield></R.ContainerShield>
          <R.TitleSkin animation={animation}>
            {animation && <ReactSkinview3d
                      options={options}
                      skinUrl="../../images/skin.png"
                      height="100"
                      width="100"
            /> }
            <R.TitleResume>Currículo</R.TitleResume>
          </R.TitleSkin>
          <R.RoadMaps>
            <RoadMap roadMap={RoadMapAcademy}/>
            <RoadMap roadMap={RoadMapProfessional}/>
            <RoadMap roadMap={RoadMapAbilities}/>
          </R.RoadMaps>     
        </R.Container>
  )
}
