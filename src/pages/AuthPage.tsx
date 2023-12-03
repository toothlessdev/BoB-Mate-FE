import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputContainer, Label } from "../components/interface/Form";
import { Button } from "../components/interface/Button";

import styles from "./AuthPage.module.scss";
import { API_BASE_URL } from "../constants/api";

const AuthPage = {
    SignIn: () => {
        const naviagte = useNavigate();
        const idRef = useRef<HTMLInputElement>(null);
        const pwRef = useRef<HTMLInputElement>(null);

        const onLogin = useCallback(() => {
            const request = async () => {
                const response = await fetch(API_BASE_URL + "/account/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: idRef.current.value,
                        password: pwRef.current.value,
                    }),
                });
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem("token", data.token);
                    naviagte("/");
                } else alert("아이디 혹은 비밀번호를 확인해주세요");
            };
            request();
        }, []);

        return (
            <main className={styles.sign_in}>
                <div className={styles.form}>
                    <Label className={styles.title}>로그인</Label>
                    <div className={styles.horizontal_separator} />

                    <Input name="id" type="text" placeholder="아이디를 입력해주세요" inputRef={idRef}></Input>
                    <Input name="pw" type="password" placeholder="비밀번호를 입력해주세요" inputRef={pwRef}></Input>

                    <Button type="primary-fill" width="100%" height="50px" onClick={onLogin}>
                        로그인
                    </Button>
                </div>

                <p className={styles.sign_up_link}>
                    <span>아직 계정이 없으신가요?</span>
                    <span>
                        <Link to="/auth/signup">회원가입</Link>
                    </span>
                </p>
            </main>
        );
    },
    SignUp: () => {
        const idRef = useRef<HTMLInputElement>();
        const pwRef = useRef<HTMLInputElement>();
        const nicknameRef = useRef<HTMLInputElement>();
        const emailRef = useRef<HTMLInputElement>();

        const onSignUp = useCallback(() => {
            const request = async () => {
                try {
                    const response = await fetch(API_BASE_URL + "/account/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: idRef.current.value,
                            password: pwRef.current.value,
                            nickname: nicknameRef.current.value,
                            email: emailRef.current.value,
                        }),
                    });
                    if (response.ok) alert("회원가입이 완료되었습니다!");
                    else throw new Error("회원가입 요청 실패");
                } catch (err) {
                    alert("회원가입에 실패했습니다");
                }
            };
            request();
        }, []);

        return (
            <main className={styles.sign_up}>
                <div className={styles.form}>
                    <Label className={styles.title}>회원가입</Label>
                    <div className={styles.horizontal_separator} />

                    <InputContainer label="아이디" type="text" placeholder="아이디를 입력해주세요" inputRef={idRef} />
                    <InputContainer label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" inputRef={pwRef} />
                    <InputContainer label="닉네임" type="text" placeholder="이름을 입력해주세요" inputRef={nicknameRef} />
                    <InputContainer label="이메일" type="email" placeholder="이메일 주소를 입력해주세요" inputRef={emailRef} />

                    <Button type="primary-fill" width="100%" height="50px" onClick={onSignUp}>
                        가입하기
                    </Button>
                </div>
            </main>
        );
    },
};

export default AuthPage;
