import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home';




const App = () => {
  return (

    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
        {/* <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='explore' element={<Explore/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App