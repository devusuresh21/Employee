import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
        <Route path='add' element={<AddEmployee/>}/>
        <Route path='view' element={<View/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='delete' element={<Delete/>}/>
        
        
      </Routes>
      </BrowserRouter>

 






    </div>
  );
}

export default App;
