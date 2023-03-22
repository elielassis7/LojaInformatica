import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Store from './pages/Store';
import { Header } from './components/Header';
import ButtonTop from './components/ButtonTop';

export default function App() {
  return (
      
      <BrowserRouter>
        <Header/>
        <ButtonTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
  )
}




