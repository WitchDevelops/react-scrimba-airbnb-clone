import "./Card.css";
const Card = (props: any) => {
  return (
    <figure className="card__container">
        <img className="card__image" src="/src/assets/exp-1.jpg">
        </img>
        <p className="badge">{props.badge}</p>
        <figcaption className="card__info">
            <div className="rating__container">
                <img className="rating__icon" src="/src/assets/star.svg"></img>
                <p className="rating__value">5.0</p>
                <p className="rating__number">(6)</p>&#x2022;
                <p className="rating__location">USA</p>
            </div>
            <p className="card__title">Life lessons with Katie Zaferes</p>
            <p className="card__price"><strong className="card__price--strong">From $136</strong>/ person</p>
        </figcaption>
    </figure>
  )
}

export default Card