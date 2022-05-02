import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Delivered from './components/CheckOut/Delivered/Delivered';
import Home from './components/Home/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/inventory/:id' element={<ItemDetail></ItemDetail>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/delivered' element={
            <RequireAuth>
              <Delivered></Delivered>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
