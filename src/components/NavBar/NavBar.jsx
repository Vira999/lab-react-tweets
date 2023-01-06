import logoImage from '../../assets/ironhack-logo-xs.png';
import menuImage from '../../assets/menu-top-xs.png';
import NavCard from '../NavCard/NavCard';
import './NavBar.css';

const NavList = [
    {src:  logoImage},
    { src: menuImage},
    
]

function NavBar(){
    return(
        

            
           <div className='nav-container'>
                {NavList.map(icon => {
                    return <NavCard  src={icon.src} />
                })}
            </div> 
       
    )

}

export default NavBar;