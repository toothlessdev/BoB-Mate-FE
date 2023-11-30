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

export interface ISearchResultContainer {
    children: React.ReactNode;
}

export interface ISearchResult {
    name: string;
    location: string;
    onClick: React.MouseEventHandler;
}
