
import './App.css';

import View from './components/View';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Delete from './components/Delete';





function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Add/>}/>
   <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
 <Route path='/View' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
