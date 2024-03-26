import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <div >
    
      
       <Routes>
       <Route path='/' element={<Home/>}/>
       
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
        
       </Routes>
      
    
     
    </div>
  );
}

export default App;
