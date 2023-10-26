import hero1 from "/src/assets/hero-1.webp";
import hero2 from "/src/assets/hero-2.webp";
import hero3 from "/src/assets/hero-3.webp";
import hero4 from "/src/assets/hero-4.webp";
import hero5 from "/src/assets/hero-5.webp";
import hero6 from "/src/assets/hero-6.webp";
import hero7 from "/src/assets/hero-7.webp";
import hero8 from "/src/assets/hero-8.webp";
import hero9 from "/src/assets/hero-9.webp";
import "./Hero.css";

type HeroImage =
  | typeof hero1
  | typeof hero2
  | typeof hero3
  | typeof hero4
  | typeof hero5
  | typeof hero6
  | typeof hero7
  | typeof hero8
  | typeof hero9;
const Hero = () => {
  const images: HeroImage[] = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
    hero9,
  ];
  return (
    <div className="hero__container">
      <div className="hero__grid-container">
        <div className="grid">
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img
                src={image}
                alt={`hero-${index + 1}`}
                className="content"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero__text-container">
        <h1 className="hero__title">Online experiences</h1>
        <p className="hero__subtitle">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
