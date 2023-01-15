import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Upload from './pages/Upload';
import Register from './pages/Register';
import Mygallery from './pages/Mygallery';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App(){
     return(
          <>
          <Router>
               <div className='conatiner'>
                    <Routes>
                         <Route path='/' element={<Dashboard/>} />
                         <Route path='/login' element={<Login/>} />
                         <Route path='/register' element={<Register/>} />
                         <Route path='/upload' element={<Upload/>} />
                         <Route path='/mygallery' element={<Mygallery/>} />
                    </Routes>
               </div>
          </Router>
          
          </>
     )
}
export default App;