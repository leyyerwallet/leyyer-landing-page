import './App.css'
import Hero from './components/Hero/Hero'
import NavbarMenu  from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Steps from './components/Steps/Steps'
import Grid from './components/Grid/Grid'
import Links from './components/Links/Links'
import Footer  from './components/Footer/Footer'
import {useRef, useState} from "react";
function App() {

  const signUpButtonRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUp = () => {
    setShowSignUp(prevState => !prevState);
  }

  return (
    <div>
    <NavbarMenu handleSignUp = {handleSignUp} signUpButtonRef = {signUpButtonRef}/>
    <Hero showSignUp = {showSignUp} handleSignUp={handleSignUp}/>
    <Cards />
    <Grid />
    <Steps />
    <Links />
    <Footer />
    </div>
  )
}

export default App
