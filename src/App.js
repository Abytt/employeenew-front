import logo from './logo.svg';
import './App.css';

import View from './components/View';

import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
  
      <Route path='/View' element={<View/>}/>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
