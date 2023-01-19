import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>live page</div>} />
          <Route path="/home" element={<div>home page</div>} />
          <Route path="/contact" element={<div>contact page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
