import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RestaurantCard.module.scss";
import { ICardContainer, IRestaurantCard } from "./types";
import { faList, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const RestaurantCard = {
    Container: ({ children }: ICardContainer) => {
        return <div className={styles.card_container}>{children}</div>;
    },
    Item: ({ title, address, menu, id }: IRestaurantCard): JSX.Element => {
        let navigate = useNavigate();

        const handleClick = () => {
            console.log(1);
            navigate(`/restaurant/${id}`);
        };

        return (
            <div className={styles.card} onClick={handleClick}>
                <div className={styles.img_container}>
                    <img src="" alt="" />
                </div>

                <div className={styles.content_container}>
                    <div className={styles.header}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.address}>
                            <FontAwesomeIcon icon={faMapLocation} className={styles.icon} />
                            {address}
                        </p>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faList} className={styles.icon} />
                            MENU
                        </div>

                        <div className={styles.item_container}>
                            {menu.map((menuItem, index) => {
                                return (
                                    <div key={index} className={styles.item}>
                                        <p>{menuItem.name}</p>
                                        <p>{menuItem.price}₩</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
