import './App.css';
import Home  from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes, BrowserRouter } from 'react-router-dom';
import AskForFreeDays from './pages/AskForFreeDays';
function App() {
  return(
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/askForFreeDays' element={<AskForFreeDays/>}> </Route>
   
    
    </Routes>
   </BrowserRouter> 
      
    );
  }
  
  export default App;
  
