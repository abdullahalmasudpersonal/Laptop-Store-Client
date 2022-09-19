import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import AddToCart from './Pages/AddToCart/AddToCart';
import Blogs from './Pages/Blogs/Blogs';
import ConnectUs from './Pages/ConnectUs/ConnectUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';

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
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='my-order' element={<MyOrder />} />
          <Route path='manage-product' element={<ManageProduct />} />
          <Route path='manage-all-orders' element={<ManageAllOrders />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
