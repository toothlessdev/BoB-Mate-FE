import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/interface/Button";
import { InputContainer } from "../components/interface/Form";
import { Modal } from "../components/interface/Modal";
import { faUtensils, faClock, faCalendar, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import styles from "./ReservationPage.module.scss";

export default function ReservationPage(): JSX.Element {
    const { id } = useParams();

    const [selectedUser, setSelectedUser] = useState<string>("");
    const [userReviewModal, setUserReviewModal] = useState<boolean>(false);
    const [restaurantReviewModal, setRestaurantReviewModal] = useState<boolean>(false);

    return (
        <main>
            <div className={styles.header}>
                <div className={styles.background_image} />
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        <span>점심 먹을 사람 구합니다</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                            2023.12.03 01:01
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                            경대맛집
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                            경북대학교 쪽문
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
                        <Button
                            type="primary-stroke"
                            width="120px"
                            height="50px"
                            onClick={() => {
                                setSelectedUser("user name");
                                setUserReviewModal(true);
                            }}>
                            리뷰 작성하기
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.btn_container}>
                <Button type="primary-fill" width="100%" height="50px">
                    참여하기
                </Button>

                <Button type="primary-stroke" width="100%" height="50px" onClick={() => setRestaurantReviewModal(!restaurantReviewModal)}>
                    음식점 리뷰 작성하기
                </Button>
            </div>

            {restaurantReviewModal && (
                <Modal title="음식점 리뷰 작성" getModalState={restaurantReviewModal} setModalState={setRestaurantReviewModal}>
                    <InputContainer label="점수" placeholder="점" type="number" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <InputContainer label="내용" placeholder="리뷰 내용을 입력해주세요" type="text" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <Button
                        type="primary-fill"
                        width="100%"
                        height="50px"
                        onClick={() => {
                            //리뷰 작성 API 호출
                            alert("리뷰 작성 API 호출");
                            setRestaurantReviewModal(false);
                        }}>
                        리뷰 작성하기
                    </Button>
                </Modal>
            )}

            {userReviewModal && (
                <Modal title={`${selectedUser} 리뷰 작성`} getModalState={userReviewModal} setModalState={setUserReviewModal}>
                    <InputContainer label="점수" placeholder="점" type="number" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <InputContainer label="내용" placeholder="리뷰 내용을 입력해주세요" type="text" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <Button
                        type="primary-fill"
                        width="100%"
                        height="50px"
                        onClick={() => {
                            //리뷰 작성 API 호출
                            alert("유저 리뷰 작성 API 호출");
                            setUserReviewModal(false);
                        }}>
                        리뷰 작성하기
                    </Button>
                </Modal>
            )}
        </main>
    );
}
