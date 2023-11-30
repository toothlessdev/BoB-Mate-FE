import { Button } from "./interface/Button";
import { ISearchResult, ISearchResultContainer } from "./types";
import styles from "./SearchResult.module.scss";

export const SearchResult = {
    Container: ({ children }: ISearchResultContainer): JSX.Element => {
        return (
            <div className={styles.search_result_container}>
                <table>
                    <thead>
                        <th>음식점 이름</th>
                        <th>음식점 위치</th>
                        <th></th>
                    </thead>

                    <tbody>{children}</tbody>
                </table>
            </div>
        );
    },
    Item: ({ name, location, onClick }: ISearchResult): JSX.Element => {
        return (
            <tr>
                <td>{name}</td>
                <td>{location}</td>
                <td onClick={onClick}>선택</td>
            </tr>
        );
    },
};
