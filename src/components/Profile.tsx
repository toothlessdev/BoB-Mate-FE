import { useSelector } from "react-redux";

import { IProfile } from "./types";
import { RootState } from "../store/store";

import styles from "./Profile.module.scss";

export const Profile = ({ imgSrc }: IProfile) => {
    const { userImg } = useSelector((state: RootState) => state.authSlice);

    return (
        <div className={styles.profile_wrapper}>
            <img src={userImg} alt="profile"></img>
        </div>
    );
};
