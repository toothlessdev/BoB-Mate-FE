import { useState } from "react";
import { UserCard, UserReviewCard } from "../components/cards/User";
import styles from "./MyPage.module.scss";
import { Card } from "../components/cards/Card";
import { UnaryExpression } from "typescript";

type TabMenu = 0 | 1 | 2;

interface ITabBody {
    tab: TabMenu;
}

export default function MyPage(): JSX.Element {
    const [tab, setTab] = useState<TabMenu>(0);

    return (
        <main>
            <div className={styles.wrapper}>
                <UserCard name="홍길동" social="instagram.com" review={0} />
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
                        <div style={tab === 2 ? { color: "#1887fd", borderBottom: "3px solid #1887fd" } : {}} onClick={() => setTab(2)}>
                            참여완료
                        </div>
                    </div>
                </div>
            </div>

            <TabBody tab={tab}></TabBody>
        </main>
    );
}

const TabBody = ({ tab }: ITabBody): JSX.Element | undefined => {
    if (tab === 0) {
        return (
            <div className={styles.tab_body}>
                <UserReviewCard name="홍길동" text="약속 시간을 잘 지켜요" />
            </div>
        );
    }
    if (tab === 1) {
        return (
            <div className={styles.tab_body}>
                <Card.Item title="약속이름" type="점심약속" date="2023.12.02" restaurant="한식" location="경대맛집" user="방장" remains={2}></Card.Item>
            </div>
        );
    }
    if (tab === 2) {
        return (
            <div className={styles.tab_body}>
                <Card.Item title="약속이름" type="점심약속" date="2023.12.02" restaurant="한식" location="경대맛집" user="" remains={2}></Card.Item>
            </div>
        );
    }
};
