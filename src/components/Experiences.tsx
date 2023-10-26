import Card from "./Card";
import data from "../data.ts";
import "./Experiences.css";
const Experiences = () => {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="cards__wrapper">
        {cards}
    </div>
  )
}

export default Experiences