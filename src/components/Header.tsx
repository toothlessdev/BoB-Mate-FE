import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./interface/Button";
import styles from "./Header.module.scss";

export const Nav = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <nav className={styles.nav_wrapper}>
            <div className={styles.nav_container}>
                <div className={styles.logo} onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faUtensils} size="2xl" />
                    <span>밥메이트</span>
                </div>

                <div className={styles.auth}>
                    <Button type="primary-fill" width="90px" height="45px" onClick={() => navigate("/auth/signin")}>
                        로그인
                    </Button>
                    <Button type="primary-stroke" width="90px" height="45px" onClick={() => navigate("/auth/signup")}>
                        회원가입
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export const NavMenu = (): JSX.Element => {
    const getActiveStyle = useCallback(({ isActive }: { isActive: boolean }) => {
        if (isActive) return { color: "#189efd", fontWeight: "bold" };
    }, []);

    return (
        <div className={styles.nav_menu_wrapper}>
            <ul className={styles.nav_menu_container}>
                <li>
                    <NavLink to="/" style={getActiveStyle}>
                        밥약찾기
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new" style={getActiveStyle}>
                        밥약잡기
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/deadline" style={getActiveStyle}>
                        음식점
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Nav />
            <NavMenu />
        </header>
    );
};
