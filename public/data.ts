import exp1 from "../src/assets/exp-1.webp";
import exp2 from "../src/assets/exp-2.webp";
import exp3 from "../src/assets/exp-3.webp";

type StatsType = {
    rating: number;
    reviewCount: number;
  };
  
  type ItemType = {
    id: number;
    title: string;
    description: string;
    price: number;
    coverImg: string;
    alt: string;
    stats: StatsType;
    location: string;
    openSpots: number;
  };
  
  const data: ItemType[] = [
    {
      id: 1,
      title: "Life Lessons with Katie Zaferes",
      description:
        "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
      price: 136,
      coverImg: exp1,
      alt: "Katie Zaferes in a swimming pool",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      location: "Online",
      openSpots: 0,
    },
    {
      id: 2,
      title: "Learn Wedding Photography",
      description:
        "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
      price: 125,
      coverImg: exp2,
      alt: "wedding photo of a bride",
      stats: {
        rating: 5.0,
        reviewCount: 30,
      },
      location: "Online",
      openSpots: 27,
    },
    {
      id: 3,
      title: "Group Mountain Biking",
      description:
        "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
      price: 50,
      coverImg: exp3,
      alt: "a mountain bike on a mountain",
      stats: {
        rating: 4.8,
        reviewCount: 2,
      },
      location: "Norway",
      openSpots: 3,
    },
  ];
  
  export default data;
  