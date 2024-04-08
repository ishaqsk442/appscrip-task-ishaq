import { CgMenu } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import DesktopNavLinks from '../DesktopNavLinks'
import "./index.css"

const NavSection = ()=>{
    return (
    <>
    
    <nav className="nav-container">
        <div>
            <CgMenu className="mobile-menu"/>
            <img className = "logo" src="https://res.cloudinary.com/dpetyh8cc/image/upload/v1712522817/Logo_bfv8uu.svg" alt= "logo"/>
        </div>
        <h1>LOGO</h1>
        <div className="icons-cont">
            <AiOutlineSearch className="icons" />
            <AiOutlineHeart  className="icons"/>
            <AiOutlineShoppingCart className="icons"/>
            <CgProfile className="desktop-profile icons" />

        </div>
        
        
    </nav>
            
    <DesktopNavLinks />
            
        </>
)
}

export default NavSection