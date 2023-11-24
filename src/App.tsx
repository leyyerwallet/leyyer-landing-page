import './App.css'
import Footer  from './components/Footer/Footer'
import NavbarMenu  from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Steps from './components/Steps/Steps'
import Grid from './components/Grid/Grid'
function App() {
 

  return (
    <>
    <NavbarMenu />
    <main>
      <div className='bg-gradient-to-r from-transparent to-blue-500'>
      <Welcome />
      </div>
    </main>
    <Grid />
    <Steps />
    <Footer />
    </>
  )
}

export default App
