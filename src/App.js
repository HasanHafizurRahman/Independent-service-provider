import {Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import Login from './Component/Login/Login';

import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import NotFound from './Shared/NotFound/NotFound';
import Register from './Component/Register/Register';
import Blog from './Component/Blog/Blog';
function App() {
  return (
    <div className='App'>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blogs' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>

      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
