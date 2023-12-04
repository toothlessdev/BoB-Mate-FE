import { useState, useEffect, useRef, useCallback } from "react";
import { Label, Input, InputContainer, InputDate } from "../components/interface/Form";
import { Button } from "../components/interface/Button";
import { IDate } from "../components/interface/types";

import styles from "./ReservationListPage.module.scss";
import { Modal } from "../components/interface/Modal";
import { SearchResult } from "../components/SearchResult";
import useFetch, { FetchStatus } from "../hooks/useFetch";
import { API_BASE_URL } from "../constants/api";
import { Loading } from "../components/interface/Loading";
import { useNavigate } from "react-router-dom";

export default function ReservationListPage(): JSX.Element {
    const [restaurantSearchModal, setRestaurantSearchModal] = useState<boolean>(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState({
        id: null,
        name: "선택된 레스토랑",
    });
    const [searchParams, setSearchParams] = useState<string>("");
    const [date, setDate] = useState<IDate>({
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
    });
    const titleRef = useRef<HTMLInputElement>();
    const penaltyRef = useRef<HTMLInputElement>();

    const navigate = useNavigate();

    const { status, data } = useFetch(API_BASE_URL + "/restaurants");

    const onSubmit = () => {
        const request = async () => {
            try {
                if (!localStorage.getItem("token")) {
                    alert("로그인 해주세요");
                    navigate("/auth/signin");
                }
                const response = await fetch(API_BASE_URL + `/reservation/create?token=${localStorage.getItem("token")}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        dateTime: `${date.year}-${date.month}-${date.date} ${date.hour}:${date.minute}:00`,
                        description: titleRef.current.value,
                        penaltyPrice: Number(penaltyRef.current.value),
                        restaurantId: Number(selectedRestaurant.id),
                    }),
                });
                if (!response.ok) throw new Error("/reservation/create API Call Failed");
                else {
                    alert("약속 생성이 생성되었습니다");
                    navigate("/");
                }
            } catch (err) {
                alert("약속 생성에 실패하였습니다");
            }
        };
        request();
    };

    return (
        <main className={styles.page}>
            <div className={styles.form}>
                <Label className={styles.title}>밥약잡기</Label>
                <div className={styles.horizontal_separator} />

                <InputContainer label="제목" type="text" placeholder="제목을 입력해주세요" inputRef={titleRef} />
                <InputDate label="시간" getDate={date} setDate={setDate}></InputDate>
                <InputContainer label="패널티" type="number" placeholder="패널티 금액을 입력해주세요" inputRef={penaltyRef} />
                <InputContainer
                    label="음식점"
                    type="text"
                    disabled
                    placeholder="음식점을 입력해주세요"
                    disable
                    btnRequired
                    btnLabel="음식점 찾기"
                    value={selectedRestaurant.name}
                    onClick={() => {
                        setRestaurantSearchModal(true);
                    }}
                />
                <Button type="primary-fill" width="100%" height="50px" onClick={onSubmit}>
                    밥약잡기
                </Button>

                {restaurantSearchModal && (
                    <Modal title="음식점 검색하기" getModalState={restaurantSearchModal} setModalState={setRestaurantSearchModal}>
                        <InputContainer
                            type="text"
                            placeholder="음식점 이름 혹은 위치를 검색해주세요"
                            label="이름 / 위치"
                            onChange={(e) => {
                                setSearchParams(e.target.value);
                            }}
                        />

                        <SearchResult.Container>
                            {status !== FetchStatus.SUCCESS && <Loading />}

                            {status === FetchStatus.SUCCESS &&
                                data
                                    .filter((element) => element.name.includes(searchParams))
                                    .map((element, index) => {
                                        return (
                                            <SearchResult.Item
                                                key={index}
                                                id={element.id}
                                                name={element.name}
                                                location={element.location}
                                                onClick={(e) => {
                                                    setSelectedRestaurant({
                                                        ...selectedRestaurant,
                                                        id: e.target.parentNode.childNodes[0].innerHTML,
                                                        name: e.target.parentNode.childNodes[1].innerHTML,
                                                    });
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
