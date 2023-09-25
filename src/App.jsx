import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

import Home from './views/Home';
import Contacto from './views/Contacto';


function App() {

  return (

    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Contacto' element={<Contacto />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;