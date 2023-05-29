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
    { date:'Academia', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/7f58e47f-16da-47c9-acdf-42ca47354ae9'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/89e9fea5-aa3e-4c40-8d13-065799b75df3', left:[], right:['Funlec: Colégio Raul Sans de Matos'], dateEnd:'', dateIcon:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8203e876-99a5-4c0e-ac19-ed41b2fc67df'},
    { date:'2019-2020', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8ec19537-391c-4e0f-bb71-67f2936142da','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/d2aa5c65-4f99-40fb-a4ae-12004c5c42d6'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/154b63d3-33f1-42b7-ac58-201ad6327116', left:['Inicio dos estudos de programação com C', 'Estudos de HTML/JAVASCRIPT/MYSQL e inicio de REACT'], right:[], dateEnd:''}, 
    { date:'2020-2024', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/6d48cb24-584e-444f-b13b-7e661be300cf'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:[], right:['UFMS: Bacherelado em Engenharia da Computação'], dateEnd:''},
    { date:'2021-2022', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/997faee6-e73e-4732-8032-a0e394fdbb3c'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:['Estudos afinco de React e suas modulações'], right:[], dateEnd:''}, 
    { date:'2023', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/3da3a242-2343-4643-983b-3a0ed0fb41f5'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:[], right:['Curso React Avançado: Crie aplicações com NextJS, Strapi'], urlBackEnd:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8185898b-5915-46eb-9c35-094890563421', dateEnd:'Pós em I.A'},
  ]

  const RoadMapProfessional = [
    { date:'Projetos', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/c0a7c7bb-bfda-46de-8579-6bfc8a2838b6'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/89e9fea5-aa3e-4c40-8d13-065799b75df3', left:[], right:['Trabalhos na faculdade'], dateEnd:'', dateIcon:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/073e18c0-f156-4707-a556-01680ed1809f'},
    { date:'2019-2020', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/1a24b1bd-b34e-400c-a728-1e101f5fa434','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/1ad8f19c-ae53-4d4a-9104-c0ddfe4e0b18','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/711e4f17-ec85-4532-842d-44a3f8edbb9a',
    'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/16d11ac3-b660-47bf-b68e-04fe0b8c5881','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/45a5ec7b-4eae-4bbd-88bd-8ac997fc608c'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/154b63d3-33f1-42b7-ac58-201ad6327116', left:['Trabalho de site de Podcast', 'Projeto Loja Virtual', 'RocketSeat - NLW', 'Clones-NetFlix', 'Clone Instagram - NEXT.JS'], right:[], dateEnd:''}, 
    { date:'2021-2022', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/703cdcfb-7273-4a74-a041-3b28f92c5403'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:[], right:['Projeto Curso Aula com DDD/Solid e TypeScript'], dateEnd:''}, 
    { date:'2022-2023', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/703cdcfb-7273-4a74-a041-3b28f92c5403', 'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/c4b31f69-4811-4715-a60b-18b0a25aa31c'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', urlBackEnd:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8185898b-5915-46eb-9c35-094890563421', left:['Projeto Finanças com DDD/Solid e TypeScript', 'Freelancer para Diretriz Marketing & Consultoria'], right:[], dateEnd:'Dev. Jr ou Estágio'},
  ]

   
  const RoadMapAbilities = [
    { date:'Habilidades', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8ec19537-391c-4e0f-bb71-67f2936142da', 'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/3d43c4c8-1976-40a1-a25e-921662e7e440'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/89e9fea5-aa3e-4c40-8d13-065799b75df3', left:[], right:['C', 'Python'], dateEnd:'', dateIcon:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/1feb93ac-32c2-46e3-9780-cd4d42af2950'},
    { date:'2020-2021', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/d2aa5c65-4f99-40fb-a4ae-12004c5c42d6','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/997faee6-e73e-4732-8032-a0e394fdbb3c'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/154b63d3-33f1-42b7-ac58-201ad6327116', left:['JavaScript/HTML/CSS', 'React.JS e Styled-Components'], right:[], dateEnd:''}, 
    { date:'2021-2022', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/997faee6-e73e-4732-8032-a0e394fdbb3c','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/517df2f0-8c7d-4257-828b-bb62d98dd91e','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/536f93c2-c406-4ece-9461-cd846c57bd4d'], urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:[], right:['Redux, Context', 'API, NodeJS, ExpressJS', 'MongoDB'], dateEnd:''}, 
    { date:'2023', url:['https://github.com/Diogolima-creator/portfilioMine/assets/62246037/96330428-c225-4795-bc2d-8ff57e23bc66','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/a0bea427-e946-486f-a669-bdbf904bfe5a','https://github.com/Diogolima-creator/portfilioMine/assets/62246037/703cdcfb-7273-4a74-a041-3b28f92c5403', 'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/89898fc3-f7c2-4883-a5e3-4db419e44228'], urlBackEnd:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/8185898b-5915-46eb-9c35-094890563421', urlBack:'https://github.com/Diogolima-creator/portfilioMine/assets/62246037/ed752fa5-32c0-4a1d-a020-a0121a07d14a', left:['Fundamentos de SOLID', 'Domain Drive Development', 'TypeScript', 'Teste Unitários/JEST'], right:[], dateEnd:'Next.JS e Java'},
  ]

  return (
        <R.Container ref={ref} id="Resume" >
          <R.ContainerShield></R.ContainerShield>
          <R.TitleSkin animation={animation}>
            {animation && <ReactSkinview3d
                      options={options}
                      skinUrl="https://github.com/Diogolima-creator/portfilioMine/assets/62246037/4df4addf-253b-4837-ac0c-33c2f0ab7974"
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
