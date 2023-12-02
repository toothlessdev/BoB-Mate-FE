export interface ICard {
    title: string;
    type: "아침약속" | "점심약속" | "저녁약속";
    date: string;
    restaurant: string;
    location: string;
    user: string;
    remains: number;
}

export interface IRestaurantCard {
    id: number,
    title: string,
    address: string,
    menu: {
        menuTitle: string,
        price: number
    }[]
}

export interface ICardContainer {
    children: React.ReactNode;
}
