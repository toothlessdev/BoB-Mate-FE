import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";

import styles from "./Card.module.scss";
import { ICard, ICardContainer } from "./types";

export const Card = {
    Container: ({ children }: ICardContainer) => {
        return <div className={styles.card_container}>{children}</div>;
    },

    Item: ({ title, type, date, restaurant, location, user, remains }: ICard): JSX.Element => {
        return (
            <div className={styles.card}>
                <div className={styles.img_container}>
                    <img src="" alt="" />
                </div>

                <div className={styles.content_container}>
                    <div className={styles.card_head}>
                        <div>{type}</div>
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <span style={{ marginLeft: "5px" }}>{user}</span>
                        </div>
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

                    <h3>{title}</h3>

                    <div className={styles.card_footer}>
                        <h2>
                            <span>{remains}명</span> 남음
                        </h2>
                    </div>
                </div>
            </div>
        );
    },
};
