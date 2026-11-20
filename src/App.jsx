
import { Routes, Route } from 'react-router'

import MyCard from './components/MyCard'
import SideMenu from './components/SideMenu'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import EduExp from './pages/EduExp'
import Spec from './pages/Spec'
import Projects from './pages/Projects'
import Skill from './pages/Skill'
import ContactMe from './pages/ContactMe'

import './App.css'

function App() {
  return (
    <div className="app-container">

      <MyCard />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<EduExp />} />
          <Route path="/specializations" element={<Spec />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>

      <SideMenu />

    </div>
  )
}

export default App
