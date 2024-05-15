import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchProducts from './components/FetchProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/fetchProducts' element={<FetchProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
