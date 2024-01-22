import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Page404 from './pages/404'


function KasaRoutes(){

  return(
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Apropos' element={<Apropos />}></Route>
      <Route path='/Logement/:id' element={<Logement/>}></Route>

      {/* Redirection des url erronées sur une page d'erreur */}
      
      <Route path='/*' element={<Page404 />}></Route>
    </Routes>
  )
}
export default KasaRoutes