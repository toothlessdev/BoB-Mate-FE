import { Card } from "../components/Card";
import { ICard } from "../components/types";
import styles from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Card.Container>
                {data.map((element) => {
                    return <Card.Item title={element.title} type={element.type} date={element.date} restaurant={element.restaurant} location={element.location} user={element.user} remains={element.remains}></Card.Item>;
                })}
            </Card.Container>
        </main>
    );
}

const data: ICard[] = [
    {
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
    {
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
    {
        title: "점심 같이 먹을 사람 구해요",
        type: "점심약속",
        date: "2023년 11월 29일 (수) 12:00 ~ 13:00",
        restaurant: "한식 / 정문국밥",
        location: "경북대학교 정문",
        user: "BobMate",
        remains: 2,
    },
];
