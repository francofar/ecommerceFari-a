import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo1 from './assets/parrilla.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={logo1}/>
            <nav>
                <Link to='category/pastas'> Pastas</Link>
                <Link to='category/minutas'>minutas</Link>
                <Link to='category/postres'>postres</Link>
                <Link to='category/ensaladas'>Ensaladas</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar