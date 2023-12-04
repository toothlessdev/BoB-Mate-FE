import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/interface/Button";
import { InputContainer } from "../components/interface/Form";
import { Modal } from "../components/interface/Modal";
import { faUtensils, faClock, faCalendar, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import useFetch, { FetchStatus } from "../hooks/useFetch";

import styles from "./ReservationPage.module.scss";
import { API_BASE_URL } from "../constants/api";
import { Loading } from "../components/interface/Loading";

export default function ReservationPage(): JSX.Element {
    const { id } = useParams();
    const navigate = useNavigate();

    const scoreRef = useRef();
    const contentRef = useRef();

    const restaurantScoreRef = useRef();
    const restaurantContentRef = useRef();

    const [selectedUser, setSelectedUser] = useState({
        id: "",
        nickname: "",
    });
    const [userReviewModal, setUserReviewModal] = useState<boolean>(false);
    const [restaurantReviewModal, setRestaurantReviewModal] = useState<boolean>(false);

    const { status, data } = useFetch(API_BASE_URL + `/reservation/${id}`);

    const [restaurantData, setRestaurantData] = useState();
    const [restaurantStatus, setRestaurantStatus] = useState<FetchStatus>();

    const onParticipate = () => {
        if (!localStorage.getItem("token")) {
            alert("로그인 해주세요");
            navigate("/auth/signin");
        } else {
            fetch(API_BASE_URL + `/reservation/join?token=${localStorage.getItem("token")}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reservationId: id,
                }),
            })
                .then(() => {
                    alert("약속에 참여가 완료되었습니다");
                    navigate("/");
                })
                .catch((err) => {
                    alert("약속에 참여 실패했습니다");
                    navigate("/");
                });
        }
    };

    useEffect(() => {
        if (status === FetchStatus.SUCCESS) {
            fetch(API_BASE_URL + `/restaurants/${data.restaurantId}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setRestaurantStatus(FetchStatus.SUCCESS);
                    setRestaurantData(data);
                })
                .catch((err) => [
                    //
                ]);
        }
    }, [status]);

    if (restaurantStatus !== FetchStatus.SUCCESS) return <Loading />;

    return (
        <main>
            <div className={styles.header}>
                <div className={styles.background_image} />
                <div className={styles.title_container}>
                    <div className={styles.title}>
                        <span>{data.description}</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                            {data.dateTime}
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                            {restaurantData.name}
                        </div>

                        <div className={styles.line}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                            {restaurantData.location}
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
                    {data.users.map((element, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <p style={{ display: "none" }}>123</p>
                                <p>{element.nickname}</p>
                                <Button
                                    type="primary-stroke"
                                    width="120px"
                                    height="50px"
                                    onClick={() => {
                                        setSelectedUser({
                                            ...selectedUser,
                                            id: element.userId,
                                            nickname: element.nickname,
                                        });
                                        setUserReviewModal(true);
                                    }}>
                                    리뷰 작성하기
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.btn_container}>
                <Button type="primary-fill" width="100%" height="50px" onClick={onParticipate}>
                    참여하기
                </Button>

                <Button type="primary-stroke" width="100%" height="50px" onClick={() => setRestaurantReviewModal(!restaurantReviewModal)}>
                    음식점 리뷰 작성하기
                </Button>
            </div>

            {restaurantReviewModal && (
                <Modal title="음식점 리뷰 작성" getModalState={restaurantReviewModal} setModalState={setRestaurantReviewModal}>
                    <InputContainer inputRef={restaurantScoreRef} label="점수" placeholder="점" type="number" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <InputContainer inputRef={restaurantContentRef} label="내용" placeholder="리뷰 내용을 입력해주세요" type="text" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <Button
                        type="primary-fill"
                        width="100%"
                        height="50px"
                        onClick={() => {
                            //리뷰 작성 API 호출
                            if (!localStorage.getItem("token")) {
                                alert("로그인 해주세요");
                                navigate("/auth/signin");
                            } else {
                                console.log("post");
                                fetch(API_BASE_URL + `/restaurants/reviews?token=${localStorage.getItem("token")}`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        score: restaurantScoreRef.current.value,
                                        description: restaurantContentRef.current.value,
                                        reviewerId: Number(id),
                                    }),
                                }).then(() => {
                                    alert("리뷰 작성이 완료되었습니다");
                                    setRestaurantReviewModal(false);
                                });
                            }
                        }}>
                        리뷰 작성하기
                    </Button>
                </Modal>
            )}

            {userReviewModal && (
                <Modal title={`${selectedUser.nickname} 리뷰 작성`} getModalState={userReviewModal} setModalState={setUserReviewModal}>
                    <InputContainer inputRef={scoreRef} label="점수" placeholder="점" type="number" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <InputContainer inputRef={contentRef} label="내용" placeholder="리뷰 내용을 입력해주세요" type="text" min={0} max={5} style={{ width: "100%" }}></InputContainer>
                    <Button
                        type="primary-fill"
                        width="100%"
                        height="50px"
                        onClick={() => {
                            //리뷰 작성 API 호출
                            if (!localStorage.getItem("token")) {
                                alert("로그인 해주세요");
                                navigate("/auth/signin");
                            } else {
                                console.log("post");
                                fetch(API_BASE_URL + `/users/reviews?token=${localStorage.getItem("token")}`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        score: scoreRef.current.value,
                                        description: contentRef.current.value,
                                        reviewerId: Number(selectedUser.id),
                                    }),
                                }).then(() => {
                                    alert("리뷰 작성이 완료되었습니다");
                                    setUserReviewModal(false);
                                });
                            }
                        }}>
                        리뷰 작성하기
                    </Button>
                </Modal>
            )}
        </main>
    );
}
