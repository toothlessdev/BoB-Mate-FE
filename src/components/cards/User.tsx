import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ReviewStar } from "../Review";
import { IUserCard, IUserProfile, IUserReviewCard } from "./types";

import profileImg from "@/assets/profile.webp";
import styles from "./User.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile = ({ name }: IUserProfile): JSX.Element => {
    const [dropdown, setDropDown] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div className={styles.user_profile_wrapper}>
            <div className={styles.user_profile_container} onClick={() => setDropDown(!dropdown)}>
                <img src={profileImg} alt="" />
                <h4>{name}</h4>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

            {dropdown && (
                <div className={styles.user_profile_dropdown}>
                    <div onClick={() => navigate("/mypage")}>마이페이지</div>
                    <div
                        onClick={() => {
                            localStorage.removeItem("token");
                            alert("로그아웃 되었습니다");
                            navigate("/");
                        }}>
                        로그아웃
                    </div>
                </div>
            )}
        </div>
    );
};

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
