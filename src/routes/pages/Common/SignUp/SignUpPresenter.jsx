import React from "react";
import { SignUpBox } from "./components/SignUpBox";
import { SignUpProfile } from "./components/SignUpProfile";
import { Button, MainLayout, Top } from "../../../../components";

import './SignUp.css';

const SignUpPresenter = ({
    step,
    SignUp,
    userInfo,
    setUserInfo,
    navigate,
    goToNextStep,
    goToPrevStep,
    countryList,
    majorList,
    dietList,
    religionList,
    languageList,
    hobbyList,
}) => {
    return (
        <MainLayout
            backgroundColor={'#FFF'}
            padding={0}
        >

            <Top
                title={"Sign Up"}
                sticky={true}
                top={true}
            />

            {step === 1 && (
                <>
                    <SignUpBox
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        goToNextStep={goToNextStep}
                    />

                    <Button
                        title={"다음"}
                        fontSize={"1.25rem"}
                        fontWeight={600}
                        wrapPadding={15}
                        backgroundColor={'#d81837'}
                        onClick={goToNextStep}
                    />

                    <Button
                        title={"이미 계정이 있으신가요? 로그인"}
                        fontSize={"1.25rem"}
                        fontWeight={600}
                        wrapPadding={15}
                        backgroundColor={'#acacacff'}
                        onClick={() => navigate('/signin')}
                    />
                </>
            )}

            {step === 2 && (
                <>
                    <SignUpProfile
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        countryList={countryList}
                        majorList={majorList}
                        dietList={dietList}
                        religionList={religionList}
                        languageList={languageList}
                        hobbyList={hobbyList}
                        goToPrevStep={goToPrevStep}
                        onSubmit={SignUp}
                    />
                </>
            )}

        </MainLayout>
    );
};

export default SignUpPresenter;
