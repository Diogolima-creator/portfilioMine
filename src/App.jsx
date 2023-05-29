import { AboutMe, Header, MyJobs, Resume, Contact } from './components/index.js'
import * as A from './AppStyles.js'

function App() {

  return (
    <A.Container>
      <Header />
      <AboutMe />
      <Resume />
      <MyJobs />
      <Contact />
    </A.Container>
  )
}

export default App

