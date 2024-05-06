import './App.css';
import Home  from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes, BrowserRouter } from 'react-router-dom';
import AskForFreeDays from './pages/AskForFreeDays';
import Notes from './pages/Notes';
function App() {
  return(
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/askForFreeDays' element={<AskForFreeDays/>}> </Route>
    <Route path='/notes' element={<Notes/>}> </Route>
    
    </Routes>
   </BrowserRouter> 
      
    );
  }
  
  export default App;
  
