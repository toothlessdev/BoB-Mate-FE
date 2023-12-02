import styles from "./Review.module.scss";

import starFilled from "@/assets/star-filled.svg";
import starStroke from "@/assets/star-stroke.svg";

interface IReviewStar {
    score: number;
}

export const ReviewStar = ({ score }: IReviewStar): JSX.Element => {
    return (
        <div className={styles.review_star_container}>
            {Array(5 - score)
                .fill(0)
                .map(() => {
                    return <img src={starStroke} alt="" />;
                })}

            {Array(score)
                .fill(0)
                .map(() => {
                    return <img src={starFilled} alt="" />;
                })}
        </div>
    );
};
