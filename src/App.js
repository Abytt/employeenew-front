
import './App.css';

import View from './components/View';

import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/Delete' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
