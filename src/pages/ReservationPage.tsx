import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/interface/Button";
import { faUtensils, faClock, faCalendar, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import styles from "./ReservationPage.module.scss";

export default function ReservationPage(): JSX.Element {
    const { id } = useParams();

    console.log(id);

    return (
        <main>
            <div className={styles.header}>
                <div className={styles.background_image} />
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faClock} className={styles.icon} />
                        <span></span>
                        <FontAwesomeIcon icon={faClock} className={styles.icon} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                            주소
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                            주소
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                            주소
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.participant}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    참여중인 유저
                </div>
                <div className={styles.item_container}>
                    <div className={styles.item}>
                        <p>USER NAME</p>
                    </div>
                </div>
            </div>

            <div className={styles.btn_container}>
                <Button type="primary-fill" width="100%" height="50px">
                    참여하기
                </Button>
            </div>
        </main>
    );
}
