import './App.css'
import Hero from './components/hero/Hero'
import Idiomas from './components/idiomas/Idiomas'
import Modalidad from './components/modalidad/Modalidad'
import Navbar from './components/navbar/Navbar'
import Planes from './components/planes/Planes'
import Profe from './components/profe/Profe'

function App() {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main>
        <div id='home'>
        <Hero />
        </div>
        <Idiomas />
        <Modalidad />
        <Profe />
        <Planes />
      </main>
    </div>
  )
}

export default App
