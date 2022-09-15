import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import ConnectUs from './Pages/ConnectUs/ConnectUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Prodcuts from './Pages/Products/Products/Prodcuts';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header2/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Prodcuts />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/connect-us' element={<ConnectUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/manage-products' element={<ManageProducts />} />
        <Route path='/my-order' element={<ManageProducts />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
