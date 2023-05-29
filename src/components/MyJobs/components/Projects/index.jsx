import * as P from './styles'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Projects = ({item}) => {
  return (
    <P.Project>
              <img src={item.url}></img>
              <P.ProjectRight>
                <P.Title>{item.name}</P.Title>
                <P.Paragraph>
                  {item.text}
                </P.Paragraph>
                <P.Stack>
                    <P.Title>Stacks Utilizadas</P.Title>
                    {/* eslint-disable-next-line react/prop-types*/}
                    {item.stack.map((stackItem, key) => (
                      <P.Paragraph key={key}>
                        {stackItem}
                      </P.Paragraph>
                    ))}
                </P.Stack>
                <P.Buttons>
                  <Button sx={{ m:1, p:0, backgroundColor:'#707070', border:'4px solid #565B4E', ':hover': { backgroundColor: 'rgba(112, 112, 112, .7)'} }}variant="contained"><a target='_blank' rel="noreferrer" href={item.gitHub}><GitHubIcon /></a></Button>
                  <Button sx={{ m:1, p:0, backgroundColor:'#707070', border:'4px solid #565B4E', ':hover': { backgroundColor: 'rgba(112, 112, 112, .7)'} }}variant="contained"><a target='_blank' rel="noreferrer" href={item.pageProject}>Ir para projeto</a></Button>
                </P.Buttons>
              </P.ProjectRight>  
    </P.Project> 
  )
}

Projects.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    gitHub: PropTypes.string.isRequired,
    pageProject: PropTypes.string.isRequired
  }))
}
