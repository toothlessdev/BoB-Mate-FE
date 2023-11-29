import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.scss";

export default function RestaurantPage(): JSX.Element {
    const { id } = useParams();

    return <>{id} 레스토랑 상세페이지</>;
}
