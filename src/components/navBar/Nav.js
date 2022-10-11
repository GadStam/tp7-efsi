import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../img/Logo.png'
const Nav = () => {
  const sayHi = ["pepe", "marta", "carlos", "miriam"]

  return (
    <div style={{position: "fixed", width: "100%"}}>
      
      <ul>
        <li> <img src={Logo} width="100" height="100"></img></li>
        <li><Link to='/' >Inicio</Link></li>
        <li><Link to='/products' >Products</Link></li>
        <li><Link to='/qnessomos' >QUIENES SOMOS</Link></li>
       
      </ul>
    </div>
  );
}

export default Nav;


