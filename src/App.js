import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import CheckOut from './Pages/CheckOut/Checkout/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <ManageService></ManageService>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
