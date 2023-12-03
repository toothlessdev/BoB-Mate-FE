import { RestaurantCard } from "../components/cards/RestaurantCard";
import { IRestaurantCard } from "../components/cards/types";
import { Loading } from "../components/interface/Loading";

import { API_BASE_URL } from "../constants/api";
import useFetch from "../hooks/useFetch";
import { FetchStatus } from "../hooks/useFetch";

import styles from "./RestaurantListPage.module.scss";

export default function RestaurantListPage(): JSX.Element {
    const { status, data } = useFetch(API_BASE_URL + "/restaurants");

    console.log(data);

    return (
        <main>
            {status === FetchStatus.PENDING && <Loading />}

            {status === FetchStatus.SUCCESS && (
                <RestaurantCard.Container>
                    {data.map((item, index) => {
                        return <RestaurantCard.Item key={index} title={item.name} address={item.location} menu={item.menus} id={item.id} />;
                    })}
                </RestaurantCard.Container>
            )}
        </main>
    );
}
