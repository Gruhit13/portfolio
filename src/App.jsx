import { Routes, Route } from 'react-router-dom'; 
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio/" element={<AboutMe />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App;