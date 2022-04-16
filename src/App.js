import {Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
