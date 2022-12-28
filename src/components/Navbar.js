import{Link,Routes,Route,BrowserRouter} from 'react-router-dom';

function Navbar(){

    return(
        <>
          
          <nav className="navbar navbar-expand-sm bg-light">
              <div className="container-fluid">
              <ul className="navbar-nav">
                 <li className="nav-item">
                 <Link className="nav-link" href="#"> OneKart</Link>
                  </li>
                  <li className="nav-item">
                 <Link className="nav-link" href="#">Login</Link>
                 </li>
                <li className="nav-item">
                <Link className="nav-link" href="#">Register</Link>
               </li>
               <li className="nav-item">
                <Link className="nav-link" href="#">Contact US</Link>
               </li>
               </ul>
              </div>
           </nav>
              
        </>

    )
}

export default Navbar;