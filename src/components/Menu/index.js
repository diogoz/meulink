import "./menu.css"
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom';

const Menu = () => {
   return (
    <div className="menu">
        <a className="social" href="http://youtube.com">
            <BsYoutube size={24} color="#FFF"/>
        </a>
        
        <a className="social" href="http://instagram.com">
            <BsInstagram size={24} color="#FFF"/>
        </a>

        <Link className="menu-item" to="/links">
            Meus Links
        </Link>
    </div>
   )
}

export default Menu;