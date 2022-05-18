import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Blog from './pages/Blog/Blog';
import AddItem from './pages/AddItem/AddItem';
import OurProduct from './Components/OurProduct/OurProduct';
import ProductDetails from './pages/ProductDitels/ProductDetails';
import Manage from './Components/Manage/Manage';
import MyItem from './pages/MyItem/MyItem';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <div>
      <h1 className='commpamy-name'>RAJIB ENTERPRISE</h1> 
      
      <Header></Header>      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/our-products" element={<OurProduct></OurProduct>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>.
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>        
        <Route path="/manage" element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>        
        <Route path="/my-item" element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>        
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
