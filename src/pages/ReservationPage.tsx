import { useState } from "react";
import { Label, Input, InputContainer, InputDate } from "../components/interface/Form";
import { Button } from "../components/interface/Button";
import { IDate } from "../components/interface/types";

import styles from "./ReservationPage.module.scss";
import { Modal } from "../components/interface/Modal";
import { SearchResult } from "../components/SearchResult";

export default function ReservationPage(): JSX.Element {
    const [restaurantSearchModal, setRestaurantSearchModal] = useState<boolean>(false);

    const [startDate, setStartDate] = useState<IDate>({
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
    });
    const [endDate, setEndDate] = useState<IDate>({
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
    });

    return (
        <main className={styles.page}>
            <div className={styles.form}>
                <Label className={styles.title}>밥약잡기</Label>
                <div className={styles.horizontal_separator} />

                <InputContainer label="제목" type="text" placeholder="제목을 입력해주세요" />
                <InputContainer label="설명" type="text" placeholder="설명을 입력해주세요" />
                <InputDate label="시작시간" getDate={startDate} setDate={setStartDate}></InputDate>
                <InputDate label="마감시간" getDate={endDate} setDate={setEndDate}></InputDate>
                <InputContainer
                    label="음식점"
                    type="text"
                    placeholder="음식점을 입력해주세요"
                    disable
                    btnRequired
                    btnLabel="음식점 찾기"
                    onClick={() => {
                        setRestaurantSearchModal(true);
                    }}
                />
                <Input type="submit" value="밥약잡기" />

                {restaurantSearchModal && (
                    <Modal title="음식점 검색하기" getModalState={restaurantSearchModal} setModalState={setRestaurantSearchModal}>
                        <InputContainer
                            type="text"
                            placeholder="음식점 이름 혹은 위치를 검색해주세요"
                            label="이름 / 위치"
                            btnRequired
                            btnLabel="검색"
                            onClick={() => {
                                // 검색결과 Fetch
                            }}
                        />

                        <SearchResult.Container>
                            {searchResult.map((element, index) => {
                                return (
                                    <SearchResult.Item
                                        key={index}
                                        name={element.name}
                                        location={element.location}
                                        onClick={(e) => {
                                            console.log(e.target.parentNode);
                                            setRestaurantSearchModal(false);
                                        }}
                                    />
                                );
                            })}
                        </SearchResult.Container>
                    </Modal>
                )}
            </div>
        </main>
    );
}

const searchResult = [
    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },
    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },

    {
        name: "레스토랑 이름",
        location: "레스토랑 위치",
    },
];
