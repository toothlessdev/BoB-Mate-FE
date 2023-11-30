import { RestaurantCard } from "../components/cards/RestaurantCard";
import { IRestaurantCard } from "../components/cards/types";
import styles from "./RestaurantListPage.module.scss";

export default function RestaurantListPage(): JSX.Element {
    return (
        <main>
            <RestaurantCard.Container>
                {
                    data.map((item, index) => {
                        return <RestaurantCard.Item key={index} title={item.title} address={item.address} menu={item.menu} id={item.id}/>
                    })
                }
            </RestaurantCard.Container>
        </main>
    );
}

const data: IRestaurantCard[] = [
    {
        id: 1,
        title: 'Allison Ltd',
        address: '1959 Thompson ForksEast Jason, GA 49037',
        menu: [
            {
                menuTitle: 'Sloppy Joe Chicken Burger',
                price: 4000
            },
            {
                menuTitle: 'Grandmamas Signature Hot Chocolate',
                price: 2800
            },
            {
                menuTitle: 'Four Cheese Pizza',
                price: 5600
            },
        ]
    },
    {
        id: 2,
        title: 'Allison Ltd 02',
        address: '1959 Thompson ForksEast Jason, GA 49037',
        menu: [
            {
                menuTitle: 'Sloppy Joe Chicken Burger',
                price: 4000
            },
            {
                menuTitle: 'Grandmamas Signature Hot Chocolate',
                price: 2800
            },
            {
                menuTitle: 'Four Cheese Pizza',
                price: 5600
            },
        ]
    }
]