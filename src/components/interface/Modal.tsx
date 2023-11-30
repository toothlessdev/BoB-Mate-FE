import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { IModal } from "./types";
import styles from "./Modal.module.scss";

export const Modal = ({ title, children, getModalState, setModalState }: IModal): JSX.Element => {
    const onClose = useCallback(() => {
        setModalState(false);
    }, []);

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal_container}>
                <div className={styles.modal_head}>
                    <h2>{title}</h2>
                    <FontAwesomeIcon onClick={onClose} icon={faXmark} size="2xl" />
                </div>
                {children}
            </div>
        </div>
    );
};
