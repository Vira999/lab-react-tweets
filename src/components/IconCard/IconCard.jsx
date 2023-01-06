import './IconCard.css';

function IconCard(props){
    return(
        <div>
        <img src={props.src} alt='icon_image' className="local-image" />
         <h2>{props.name}</h2>
         <p>{props.description}</p>
        </div>
        
    )
}

export default IconCard;