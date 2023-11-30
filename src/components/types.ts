export interface ICard {
    title: string;
    type: "아침약속" | "점심약속" | "저녁약속";
    date: string;
    restaurant: string;
    location: string;
    user: string;
    remains: number;
}
export interface ICardContainer {
    children: React.ReactNode;
}

export interface ICategoryContainer {
    children: React.ReactNode;
}

export interface ICategoryItems {
    children: React.ReactNode;
}

export interface ICategoryItem {
    imgSrc: string;
    text: string;
}

export interface IProfile {
    imgSrc: string;
}
