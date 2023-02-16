import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Properties from './Properties/Properties';
import AddProperty from './AddProperty/AddProperty';

import './app.css';

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
