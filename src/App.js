import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddToCart from './Pages/AddToCart/AddToCart';
import Blogs from './Pages/Blogs/Blogs';
import ConnectUs from './Pages/ConnectUs/ConnectUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productsId' element={<ProductDetail />} />
        <Route path='/add-to-cart/:productsId' element={<RequireAuth><AddToCart /></RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/connect-us' element={<ConnectUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/manage-products' element={<ManageProducts />} />
        <Route path='/my-order' element={<ManageProducts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
