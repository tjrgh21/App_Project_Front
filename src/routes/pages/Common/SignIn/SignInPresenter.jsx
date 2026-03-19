import React from "react";
import { SignInBox } from "./components/SignInBox";
import { Button, MainLayout, Top } from "../../../../components";

import './SignIn.css';

const SignInPresenter = ({
    SignIn,

    id,
    setId,
    pw,
    setPw,

    navigate,
}) => {
    return (
        <MainLayout
            backgroundColor={'#FFFFF'}
            full={true}
        >
            <Top
                title={"Login"}
                absolute={true}
                top={true}
            />

            <SignInBox
                id={id}
                setId={setId}
                pw={pw}
                setPw={setPw}
            />

            <Button
                title={"로그인"}
                fontSize={"1.25rem"}
                fontWeight={600}
                wrapPadding={15}
                backgroundColor={'#d81837'}
                onClick={SignIn}
            />

            <Button
                title={"회원가입"}
                fontSize={"1.25rem"}
                fontWeight={600}
                wrapPadding={15}
                backgroundColor={'#acacacff'}
                onClick={() => navigate('/signup')}
            />

        </MainLayout>
        // <div className="signin-container">
        //     <div className="navigate-button" onClick={() => navigate('/')}>
        //         메인 페이지로
        //     </div>

        //     {/* SignUpPresenter와 차이점 비교 바람(state 간결화) */}
        //     <SignInBox
        //         id={id}
        //         setId={setId}
        //         pw={pw}
        //         setPw={setPw}
        //     />

        //     <button className="login-button" onClick={SignIn}>
        //         로그인
        //     </button>
        // </div>
    )
}

export default SignInPresenter;