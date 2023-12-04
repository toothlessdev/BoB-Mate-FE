import styles from "./Loading.module.scss";

export const Loading = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    );
};
