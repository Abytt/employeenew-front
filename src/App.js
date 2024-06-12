import logo from './logo.svg';
import './App.css';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
  
      <Route path='/View' element={<View/>}/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
