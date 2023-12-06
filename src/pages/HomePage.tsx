import { Card } from "../components/cards/Card";
import { ICard } from "../components/cards/types";
import { Loading } from "../components/interface/Loading";
import { API_BASE_URL } from "../constants/api";
import useFetch, { FetchStatus } from "../hooks/useFetch";
import styles from "./HomePage.module.scss";
import { InputContainer, Input } from "../components/interface/Form";
import { useState } from "react";

export default function HomePage() {
    const { status, data } = useFetch(API_BASE_URL + "/reservation");
    const [search, setSearch] = useState<string>("");

    if (status !== FetchStatus.SUCCESS) return <Loading />;

    return (
        <main className={styles.main}>
            <div className={styles.search}>
                <InputContainer
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    type="text"
                    label="검색어"
                    placeholder="검색어를 입력해주세요"
                    width="100%"></InputContainer>
            </div>
            <Card.Container>
                {data
                    .filter((element) => {
                        return element.description != null ? element.description.includes(search) : "";
                    })
                    .map((element, index) => {
                        return (
                            <Card.Item
                                key={index}
                                uuid={element.reservationId}
                                title={element.description}
                                type={element.finished ? "완료됌" : "진행중"}
                                date={element.dateTime}
                                restaurant={element.restaurantName}
                                location={element.restaurantLocation}
                                user={element.user}
                                remains={element.participantCnt}></Card.Item>
                        );
                    })}
            </Card.Container>
        </main>
    );
}

const data: ICard[] = [
    {
        uuid: 1,
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
    {
        uuid: 2,
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
    {
        uuid: 3,
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
];
