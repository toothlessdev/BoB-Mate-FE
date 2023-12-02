import { ReviewStar } from "../Review";
import { IUserCard, IUserReviewCard } from "./types";

import profileImg from "@/assets/profile.webp";
import styles from "./User.module.scss";

export const UserCard = ({ name, social, review }: IUserCard): JSX.Element => {
    return (
        <div className={styles.user_card_wrapper}>
            <div className={styles.user_img_container}>
                <img src={profileImg} alt="" />
            </div>
            <div className={styles.user_info_container}>
                <h3>{name}</h3>
                <h4>{social}</h4>
                <ReviewStar score={review} />
            </div>
        </div>
    );
};

export const UserReviewCard = ({ name, text }: IUserReviewCard): JSX.Element => {
    return (
        <div className={styles.user_review_card}>
            <div className={styles.user_review_head}>
                <img src={profileImg} alt="" />
                <h4>{name}</h4>
            </div>

            <div className={styles.user_review_body}>
                <p>{text}</p>
            </div>
        </div>
    );
};
