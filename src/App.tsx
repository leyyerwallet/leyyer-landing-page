import './App.css'
import Hero from './components/Hero/Hero'
import NavbarMenu  from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Steps from './components/Steps/Steps'
import Grid from './components/Grid/Grid'
import Links from './components/Links/Links'
import Footer  from './components/Footer/Footer'
function App() {
 

  return (
    <div>
    <NavbarMenu />
    <Hero />
    <Cards />
    <Grid />
    <Steps />
    <Links />
    <Footer />
    </div>
  )
}

export default App
