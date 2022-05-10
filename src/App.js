import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';


function App() {
  return (
    <div>
      <h1 className='commpamy-name'>RAJIB ENTERPRISE</h1> 
      <Header></Header>      
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>       
      </Routes>
      <Products></Products>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
