import 'bootstrap/dist/css/bootstrap.min.css';
// import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Navbar() {
     return(
          <>
          <header class="navbar navbar-dark bg-dark ">
          <div className='container-fluid '>
               <div className='navbar-brand'>
                    <Link to='/'>Photoholic</Link>
               </div>
          <div class="navbar-brand">
               <Link to='/login'>Login</Link>
          </div>
          <div class="navbar-brand">
          <Link to='/upload'>Upload</Link>
          </div>
          <div class="navbar-brand">
               <Link to='/mygallery'>My gallery</Link>
          </div>
          <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </div>
          </header>
          </>
     )
}
export default Navbar;