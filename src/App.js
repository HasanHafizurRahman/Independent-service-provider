import {Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import Login from './Component/Login/Login';

import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
function App() {
  return (
    <div className='App'>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
