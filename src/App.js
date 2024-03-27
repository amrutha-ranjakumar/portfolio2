import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  return (
    <div >
    
      
       <Routes>
       <Route path='/' element={<Home/>}/>
       
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/education' element={<Education/>}/>
       
        
       </Routes>
      
    
     
    </div>
  );
}

export default App;
