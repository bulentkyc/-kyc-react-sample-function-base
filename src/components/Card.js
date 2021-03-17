import './Card.css';

export default function (props) {
    return (
        <div className = "card">
            <img src = {props.imgSrc}/>
            <h3>{props.title}</h3> 
        </div>
    );
}