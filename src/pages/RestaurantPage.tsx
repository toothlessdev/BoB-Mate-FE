import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.scss";
import { IRestaurantCard } from "../components/cards/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faMapLocationDot, faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantPage(): JSX.Element {
    const { id } = useParams();

    return (
        <main>
            <div className={styles.header}>
                <div className={styles.background_image} />
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faUtensils} className={styles.icon}/>
                        <span>{data.title}</span>
                        <FontAwesomeIcon icon={faUtensils} className={styles.icon}/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon}/>
                            주소 {data.address}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.title}>
                <FontAwesomeIcon icon={faList} className={styles.icon}/>
                    MENU
                </div>
                <div className={styles.item_container}>
                            {
                                data.menu.map(
                                    (menuItem, index) => {
                                        return (<div key={index} className={styles.item}>
                                                    <p>
                                                        {menuItem.menuTitle}
                                                    </p>
                                                    <p>
                                                        {menuItem.price}₩
                                                    </p>
                                                </div>
                                        );
                                    }
                                )
                            }
                </div>
            </div>
        </main>
    );
}

const data: IRestaurantCard = {
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
}
