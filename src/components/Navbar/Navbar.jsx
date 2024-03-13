import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo1 from './assets/parrilla.png'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')} style={{ color: 'red', fontSize: 10, cursor: 'pointer'}}>carta</h2>
            <img className={classes.img} src={logo1}/>
            <nav className={classes.nav}>
                <Link to='/category/pastas'> Pastas</Link>
                <Link to='/category/minutas'>minutas</Link>
                <Link to='/category/postres'>postres</Link>
                <Link to='/category/ensaladas'>Ensaladas</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar