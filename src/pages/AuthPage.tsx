import { Link } from "react-router-dom";
import { Input, InputContainer, Label } from "../components/interface/Form";
import { SocialLoginButton } from "../components/interface/Button";

import styles from "./AuthPage.module.scss";

const AuthPage = {
    SignIn: () => {
        return (
            <main className={styles.sign_in}>
                <div className={styles.form}>
                    <Label className={styles.title}>로그인</Label>
                    <div className={styles.horizontal_separator} />

                    <Input name="id" type="text" placeholder="아이디를 입력해주세요"></Input>
                    <Input name="pw" type="password" placeholder="비밀번호를 입력해주세요"></Input>

                    <Input type="submit" value="로그인" />
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
        return (
            <main className={styles.sign_up}>
                <div className={styles.form}>
                    <Label className={styles.title}>회원가입</Label>
                    <div className={styles.horizontal_separator} />

                    <InputContainer label="아이디" type="text" placeholder="아이디를 입력해주세요" btnRequired btnLabel="중복확인" onClick={() => {}} />
                    <InputContainer label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" onClick={() => {}} />
                    <InputContainer label="비밀번호 확인" type="password" placeholder="비밀번호를 한번 더 입력해주세요" onClick={() => {}} />
                    <InputContainer label="닉네임" type="text" placeholder="이름을 입력해주세요" onClick={() => {}} />
                    <InputContainer label="이메일" type="email" placeholder="이메일 주소를 입력해주세요" btnRequired btnLabel="중복확인" onClick={() => {}} />

                    <Input type="submit" value="가입하기" />
                </div>
            </main>
        );
    },
    FindID: (): JSX.Element => {
        return <></>;
    },
    FindPW: (): JSX.Element => {
        return <></>;
    },
};

export default AuthPage;
