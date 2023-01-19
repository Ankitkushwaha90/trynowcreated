import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Home />
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/trynowcreated/" element={ <Home />} />
          <Route path="/trynowcreated/About" element={ <About/>} />
          <Route path="/trynowcreated/contact" element={<div>contact page</div>} />
          <Route path="/" element={<div>contact page</div>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
