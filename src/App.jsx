import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './routes/Home';
import Products from './routes/Products';
function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
