import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home';




const App = () => {
  return (

    <>
    <Navbar/>
    <Home/>
    
    </>
  )
}

export default App