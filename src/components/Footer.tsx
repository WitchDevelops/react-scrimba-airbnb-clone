import footerData from "../../public/footerData";
import "./Footer.css";
const Footer = () => {
    const categories = footerData.map((category) => {
        return (
            <div className="category__wrapper" key={category.categoryTitle}>
                <p className="category__title">{category.categoryTitle}</p>
                {category.categoryItems.map((item) => (
                    <a href={item.link} className="category__item" key={item.name}>
                        {item.name}
                    </a>
                ))}
            </div>
        );
    });
  return (
    <footer className="footer__wrapper">
        <div className="footer__categories">
            {categories}
        </div>
    </footer>
  )
}

export default Footer