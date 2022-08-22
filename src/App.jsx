
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Items from './components/items/items'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Policies from './components/policies';
import Navbar from './components/navbar/nav'; 

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
     
         
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/policies' element={<Policies/>} />
        
        <Route exact path='/items' element={<Items/>} />
        

      </Routes>
        <Footer />
    </BrowserRouter>

  )
}

export default App
