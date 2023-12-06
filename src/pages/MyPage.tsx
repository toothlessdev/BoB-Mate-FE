import { useState, useEffect } from "react";
import { UserCard, UserReviewCard } from "../components/cards/User";
import styles from "./MyPage.module.scss";
import { Card } from "../components/cards/Card";
import { UnaryExpression } from "typescript";
import useFetch, { FetchStatus, useAuthenticatedFetch } from "../hooks/useFetch";
import { API_BASE_URL } from "../constants/api";
import { Loading } from "../components/interface/Loading";
import { useNavigate } from "react-router-dom";

interface ITabBody {
    tab: number;
    userReviewData: any;
    userParticipateData: any;
}

export default function MyPage(): JSX.Element {
    const [tab, setTab] = useState<number>(0);

    const { status, data } = useFetch(API_BASE_URL + `/account/profile?token=${localStorage.getItem("token")}`);
    const { data: userReviewData } = useAuthenticatedFetch(API_BASE_URL + `/users/reviews`);
    const { data: userParticipateData } = useAuthenticatedFetch(API_BASE_URL + `/reservation/my`);

    if (status !== FetchStatus.SUCCESS) return <Loading />;

    return (
        <main>
            <div className={styles.wrapper}>
                <UserCard name={data.nickname} social={data.email} review={0} />
            </div>

            <div className={styles.tab_wrapper}>
                <div className={styles.tab_container}>
                    <div className={styles.tab_head}>
                        <div style={tab === 0 ? { color: "#1887fd", borderBottom: "3px solid #1887fd" } : {}} onClick={() => setTab(0)}>
                            후기
                        </div>
                        <div style={tab === 1 ? { color: "#1887fd", borderBottom: "3px solid #1887fd" } : {}} onClick={() => setTab(1)}>
                            참여중
                        </div>
                    </div>
                </div>
            </div>

            <TabBody tab={tab} userReviewData={userReviewData} userParticipateData={userParticipateData} />
        </main>
    );
}

const TabBody = ({ tab, userReviewData, userParticipateData }: ITabBody): JSX.Element | undefined => {
    if (tab === 0) {
        return (
            <div className={styles.tab_body}>
                {userReviewData.map((element, index) => {
                    return <UserReviewCard key={index} name={"-"} text={element.description} />;
                })}
            </div>
        );
    }
    if (tab === 1) {
        const restaurantsId = userParticipateData.map((el) => el.restaurantId);
        const reservationId = userParticipateData.map((el) => el.reservationId);

        const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);

        console.log(reservationId, restaurantsId);

        useEffect(() => {
            let restaurantInfo = [];
            let reservationInfo = [];
            userParticipateData.map((el) => {
                fetch(API_BASE_URL + `/restaurants/${el.restaurantId}`)
                    .then((res) => res.json())
                    .then((data) => {
                        restaurantInfo.push({
                            restaurantName: data.name,
                            restaurantLocation: data.location,
                        });
                    })
                    .then(() => {
                        fetch(API_BASE_URL + `/reservation/${el.reservationId}`)
                            .then((res) => res.json())
                            .then((data) => {
                                reservationInfo.push({
                                    participantCnt: data.users.length,
                                });
                            })
                            .then(() => {
                                userParticipateData.map((el, index) => {
                                    userParticipateData[index].restaurantName = restaurantInfo[index].restaurantName;
                                    userParticipateData[index].restaurantLocation = restaurantInfo[index].restaurantLocation;
                                    userParticipateData[index].participantCnt = reservationInfo[index].participantCnt;
                                });
                                setStatus(FetchStatus.SUCCESS);
                            });
                    });
            });
        }, []);

        if (status !== FetchStatus.SUCCESS) return <Loading />;

        return (
            <div className={styles.tab_body}>
                {userParticipateData.map((element, index) => {
                    return (
                        <Card.Item
                            key={index}
                            uuid={element.reservationId}
                            title={element.description}
                            type={element.finished ? "완료됌" : "진행중"}
                            date={element.dateTime}
                            restaurant={element.restaurantName}
                            location={element.restaurantLocation}
                            remains={element.participantCnt}></Card.Item>
                    );
                })}
            </div>
        );
    }
};
