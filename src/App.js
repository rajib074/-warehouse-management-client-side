import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>      
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>       
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;