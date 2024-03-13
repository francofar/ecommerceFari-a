import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo1 from './assets/parrilla.png'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')} style={{ color: 'black', fontSize: 20, cursor: 'pointer'}}>Carta</h2>
            <img className={classes.img} src={logo1}/>
            <nav className={classes.nav}>
                <Link className={classes.link} to='/category/pastas'> Pastas</Link>
                <Link className={classes.link} to='/category/minutas'>minutas</Link>
                <Link className={classes.link} to='/category/postres'>postres</Link>
                <Link className={classes.link} to='/category/ensaladas'>Ensaladas</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar