export interface ICard {
    uuid: number;
    title: string;
    type: string;
    date: string;
    restaurant: string;
    location: string;
    remains: number;
}

export interface IRestaurantCard {
    id: number;
    title: string;
    address: string;
    menu: {
        menuTitle: string;
        price: number;
    }[];
}

export interface ICardContainer {
    children: React.ReactNode;
}

export interface IUserCard {
    name: string;
    social: string;
    review: number;
}

export interface IUserReviewCard {
    name: string;
    text: string;
}

export interface IUserProfile {
    name: string;
}
