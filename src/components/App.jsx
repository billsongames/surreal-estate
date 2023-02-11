import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';

import '../styles/app.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path = "/" element={<Properties/>} />
          <Route path="AddProperty" element={<AddProperty/>} />
        </Routes>

      </div>      
    </BrowserRouter>
  );
}

export default App;
