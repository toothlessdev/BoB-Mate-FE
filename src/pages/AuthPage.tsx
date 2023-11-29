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

                    <div className={styles.links}>
                        <span></span>

                        <span>
                            <Link>아이디 찾기</Link>
                            <Link>비밀번호 찾기</Link>
                        </span>
                    </div>

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
                    <InputContainer label="이름" type="text" placeholder="이름을 입력해주세요" onClick={() => {}} />
                    <InputContainer label="이메일" type="email" placeholder="이메일 주소를 입력해주세요" btnRequired btnLabel="중복확인" onClick={() => {}} />
                    <InputContainer label="휴대폰" type="tel" placeholder="숫자만 입력해주세요" />
                    <InputContainer label="주소" type="text" placeholder="주소를 입력해주세요" />

                    <div className={styles.input_gender_wrapper}>
                        <p>성별</p>
                        <span>
                            <label htmlFor="gender-male">남</label>
                            <input type="radio" name="gender" id="gender-male" />

                            <label htmlFor="gender-female">여</label>
                            <input type="radio" name="gender" id="gender-female" />
                        </span>
                    </div>

                    <div className={styles.input_birth_wrapper}>
                        <p>생년월일</p>
                        <span>
                            <Input type="number" min={1000} max={3000} placeholder="년" />
                            <Input type="number" min={1} max={12} placeholder="월" />
                            <Input type="number" min={1} max={31} placeholder="일" />
                        </span>
                    </div>

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
