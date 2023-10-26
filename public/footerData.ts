interface CategoryItem {
    name: string;
    link: string;
}
interface Category {
    categoryTitle: string;
    categoryItems: CategoryItem[];
}

const footerData: Category[] = [
    {
        categoryTitle: "Support",
        categoryItems: [
            {
                name: "Help Center",
                link: "https://www.airbnb.com/help/home",
            },
            {
                name: "AirCover",
                link: "https://www.airbnb.com/help/aircover",
            },
            {
                name: "Anti-discrimination",
                link: "https://www.airbnb.com/against-discrimination",
            },
            {
                name: "Disability support",
                link: "https://www.airbnb.com/accessibility",
            },
            {
                name: "Cancellation options",
                link: "https://www.airbnb.com/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19",
            },
            {
                name: "Report neighbourhood concern",
                link: "https://www.airbnb.com/neighbors",
            }
        ]
    },
    {
        categoryTitle: "Hosting",
        categoryItems: [
            {
                name: "Airbnb your home",
                link: "https://www.airbnb.com/host/homes",
            },
            {
                name: "AirCover for Hosts",
                link: "https://www.airbnb.com/aircover-for-hosts",
            },
            {
                name: "Hosting resources",
                link: "https://www.airbnb.com/resources",
            },
            {
                name: "Community forum",
                link: "https://www.airbnb.com/help/community?s=footer",
            },
            {
                name: "Hosting responsibility",
                link: "https://www.airbnb.com/help/responsible-hosting",
            },
            {
                name: "Airbnb-friendly apartments",
                link: "https://www.airbnb.com/airbnb-friendly",
            }
        ]
    },
    {
        categoryTitle: "Airbnb",
        categoryItems: [
            {
                name: "Newsroom",
                link: "https://www.airbnb.com/press/news",
            },
            {
                name: "New features",
                link: "https://www.airbnb.com/release",
            },
            {
                name: "Careers",
                link: "https://www.airbnb.com/careers",
            },
            {
                name: "Investors",
                link: "https://investors.airbnb.com/",
            },
            {
                name: "Gift cards",
                link: "https://www.airbnb.com/giftcards",
            },
            {
                name: "Airbnb.org emergency stays",
                link: "https://www.airbnb.org/?locale=en",
            }
        ]
    }
]

export default footerData;