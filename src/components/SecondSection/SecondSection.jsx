import iconImage from '../../assets/icon1.png';
import iconImageTwo from '../../assets/icon2.png';
import iconImageThree from '../../assets/icon3.png';
import iconImageFour from '../../assets/icon4.png';
import IconCard from '../IconCard/IconCard';
import './SecondSection.css';

const IconList = [
    {src:  iconImage, name: 'Declarative', description: 'React makes it painless to create interactive UIs'},
    { src: iconImageTwo, name: 'Components', description: 'Build encapsuled components that manage their state.'},
    { src: iconImageThree, name: 'Single-way', description: 'A set of immutable values are oassed to the component`s.'},
    { src: iconImageFour,  name: 'JSX', description: 'Statically-typed, designed to run om modern browsers.'},
]

function SecondSection(){
    return(
        <div className="main">

            
           <div className='icon-container'>
                {IconList.map(icon => {
                    return <IconCard  src={icon.src} name={icon.name}  description={icon.description}/>
                })}
            </div> 
        </div>
    )
}

export default SecondSection