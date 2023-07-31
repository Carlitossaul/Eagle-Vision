//React
import { Route, Routes } from "react-router-dom"

//Components
import Home from './pages/Home/Home'
import About from './pages/About/About'


function App() {

  return (
    
      <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
       </Routes>
      </div>
      
     
  )
}

export default App
