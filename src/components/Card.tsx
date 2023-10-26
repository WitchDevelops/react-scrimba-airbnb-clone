import star from "/src/assets/star.svg";
import "./Card.css";

type CardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    coverImg: string;
    stats: {
      rating: number;
      reviewCount: number;
    };
    location: string;
    openSpots: number;
  };
};

const Card: React.FC<CardProps> = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText="SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText="ONLINE";
  }

  return (
    <figure className="card__container">
        <img className="card__image" src={`${props.item.coverImg}`}>
        </img>
        {badgeText && <p className="card__badge">{badgeText}</p>}
        <figcaption className="card__info">
            <div className="rating__container">
                <img className="rating__icon" src={star} alt="star rating"></img>
                <p className="rating__value">{props.item.stats.rating}</p>
                <p className="rating__number">({props.item.stats.reviewCount})</p>&#x2022;
                <p className="rating__location">{props.item.location}</p>
            </div>
            <p className="card__title">{props.item.title}</p>
            <p className="card__price"><strong className="card__price--strong">From ${props.item.price}</strong>/ person</p>
        </figcaption>
    </figure>
  )
}

export default Card