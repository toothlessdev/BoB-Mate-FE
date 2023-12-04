import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.scss";
import { IRestaurantCard } from "../components/cards/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faMapLocationDot, faUtensils } from "@fortawesome/free-solid-svg-icons";
import useFetch, { FetchStatus } from "../hooks/useFetch";
import { API_BASE_URL } from "../constants/api";
import { Loading } from "../components/interface/Loading";
import { ReviewStar } from "../components/Review";

export default function RestaurantPage(): JSX.Element {
    const { id } = useParams();

    const { status, data } = useFetch(API_BASE_URL + `/restaurants/${id}`);

    if (status !== FetchStatus.SUCCESS) return <Loading />;

    return (
        <main>
            <div className={styles.header}>
                <div className={styles.background_image} />
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                        <span>{data.name}</span>
                        <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
                            주소 {data.location}
                        </div>

                        <div className={styles.review}>
                            <span>
                                <ReviewStar score={data.score} />
                            </span>
                            {data.score}/5 ({data.scoreCnt} 개의 리뷰)
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon={faList} className={styles.icon} />
                    MENU
                </div>
                <div className={styles.item_container}>
                    {data.menus.map((menuItem, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <p>{menuItem.name}</p>
                                <p>{menuItem.price}₩</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
