
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
