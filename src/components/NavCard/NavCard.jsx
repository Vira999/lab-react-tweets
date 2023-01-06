import './NavCard.css';

function NavCard(props){
    return(
        <div>
        <img src={props.src} alt='icon_image' className="nav-image" />
        </div>
        
    )
}

export default NavCard;