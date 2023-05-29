import { FunctionAnimation } from "skinview3d/libs/animation";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export const createFunctionAboutMe = new FunctionAnimation((player, progress) => {
    
  const t = progress * 4;
// Leg swing
player.skin.leftLeg.rotation.x = Math.sin(t) * 0.8;
player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.8;

player.skin.leftArm.rotation.x = -1.23;
player.skin.rightArm.rotation.x = -1.23;

player.rotation.y = 1.23;

if(progress > 6){
  player.skin.leftArm.rotation.x = 0;
  player.skin.rightArm.rotation.x = -2.5;
  player.skin.rightArm.rotation.z = Math.sin((t/2) + Math.PI) * 0.1;
  player.skin.leftLeg.rotation.x = 0;
  player.skin.rightLeg.rotation.x = 0;
  player.skin.head.rotation.x = 0.1;
  player.rotation.y = 0;
}

if(progress > 10){
    player.skin.rightArm.rotation.z =0;
    player.skin.rightArm.rotation.x = 0;
}
}
)

export const createFunctionResume= new FunctionAnimation((player, progress) => {
    
  const t = progress * 4;
// Leg swing
player.skin.leftLeg.rotation.x = Math.sin(t) * 0.8;
player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.8;

player.skin.leftArm.rotation.x = -1.23;
player.skin.rightArm.rotation.x = -1.23;

player.rotation.y = 1.23;

if(progress > 6){
  player.skin.leftArm.rotation.x = 0;
  player.skin.rightArm.rotation.x = -2.5;
  player.skin.rightArm.rotation.z = Math.sin((t/2) + Math.PI) * 0.1;
  player.skin.leftLeg.rotation.x = 0;
  player.skin.rightLeg.rotation.x = 0;
  player.skin.head.rotation.x = 0.1;
  player.rotation.y = 0;
}

if(progress > 10){
    player.skin.rightArm.rotation.z =0;
    player.skin.rightArm.rotation.x = 0;
}
}
)

export const createFunctionMyJobs = new FunctionAnimation((player, progress) => {
    
  const t = progress * 4;
// Leg swing
player.skin.leftLeg.rotation.x = Math.sin(t) * 0.8;
player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.8;

player.skin.leftArm.rotation.x = -1.23;
player.skin.rightArm.rotation.x = -1.23;

player.rotation.y = 1.23;

if(progress > 6){
  player.skin.leftArm.rotation.x = 0;
  player.skin.rightArm.rotation.x = -2.5;
  player.skin.rightArm.rotation.z = Math.sin((t/2) + Math.PI) * 0.1;
  player.skin.leftLeg.rotation.x = 0;
  player.skin.rightLeg.rotation.x = 0;
  player.skin.head.rotation.x = 0.1;
  player.rotation.y = 0;
}

if(progress > 10){
    player.skin.rightArm.rotation.z =0;
    player.skin.rightArm.rotation.x = 0;
}
}
)

export const createFunctionContact = new FunctionAnimation((player, progress) => {
    
  const t = progress * 4;
// Leg swing
player.skin.leftLeg.rotation.x = Math.sin(t) * 0.8;
player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.8;

player.skin.leftArm.rotation.x = -1.23;
player.skin.rightArm.rotation.x = -1.23;

player.rotation.y = 1.23;

if(progress > 6){
  player.skin.leftArm.rotation.x = 0;
  player.skin.rightArm.rotation.x = -2.5;
  player.skin.rightArm.rotation.z = Math.sin((t/2) + Math.PI) * 0.1;
  player.skin.leftLeg.rotation.x = 0;
  player.skin.rightLeg.rotation.x = 0;
  player.skin.head.rotation.x = 0.1;
  player.rotation.y = 0;
}

if(progress > 10){
    player.skin.rightArm.rotation.z =0;
    player.skin.rightArm.rotation.x = 0;
}
}
)

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };


export const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);