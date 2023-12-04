import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";
import { ICard, ICardContainer } from "./types";

import restaurantImg from "@/assets/restaurant.jpg";

export const Card = {
    Container: ({ children }: ICardContainer) => {
        return <div className={styles.card_container}>{children}</div>;
    },

    Item: ({ uuid, title, type, date, restaurant, location, remains }: ICard): JSX.Element => {
        const navigate = useNavigate();

        return (
            <div className={styles.card} onClick={() => navigate(`/reservation/${uuid}`)}>
                <div className={styles.img_container}>
                    <img src={restaurantImg} alt="" />
                </div>

                <div className={styles.content_container}>
                    <div className={styles.card_head}>
                        <div>{type}</div>
                    </div>

                    <div className={styles.card_body}>
                        <div>
                            <FontAwesomeIcon icon={faCalendar} />
                            <p>{date}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUtensils} />
                            <p>{restaurant}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>{location}</p>
                        </div>
                    </div>

                    <div className={styles.card_title}>
                        <h3>{title}</h3>
                    </div>

                    <div className={styles.card_footer}>
                        <h2>
                            <span>{remains}명</span> 참여중
                        </h2>
                    </div>
                </div>
            </div>
        );
    },
};
