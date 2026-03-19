import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SignUpPresenter from "./SignUpPresenter";

import { countryList, majorList, dietList, religionList, languageList, hobbyList } from "./components/SelectList";

/* 
    하나의 페이지를 Container와 Presenter로 분리하고 각 역할은 아래와 같다

    * Container: 백엔드에서 데이터를 불러와 state 관리, 로직을 담당하는 함수 선언
    * Presenter: 불러온 데이터를 토대로 페이지에 출력, 함수 사용
*/
const SignUpContainer = () => {

    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [pw, setPw] = useState('');

    const [step, setStep] = useState(1);

    // 여러 개의 state대신 하나의 객체 state를 만들면 관리도 편해지고 API호출도 편해진다.
    // (SignIn과 비교해보면 차이점을 확연히 알 수 있다.)
    const [userInfo, setUserInfo] = useState({
        id: '',      // 아이디
        pw: '',      // 비번
        name: '',
        nationality: '',      // 국적
        city: '',      // 도시
        major: '',      // 전공
        diet: '',      // 식습관
        religion: '',      // 종교
        language1: '',
        language2: '',    // 언어
        hobby1: '',
        hobby2: '',      // 취미
    });

    const goToNextStep = () => setStep(step + 1);
    const goToPrevStep = () => setStep(step - 1);


    const SignUp = async () => {
        // 아이디와 비밀번호를 입력하지 않을 시 알림창 띄우기 (에러 처리)
        if (!userInfo.id.length) {
            alert('이메일을 입력해주세요!');
            return;
        }

        if (!userInfo.pw.length) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        console.log(userInfo);

        // API 연결
        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
            },
            // 입력 정보마다 state를 만든 것과 달리 하나의 객채로 관리하면 데이터 전송도 편리해진다.
            // (SignIn과 차이점을 비교하기 바람)
            body: JSON.stringify(userInfo),
        });

        // 결과 받은 후 문제 없으면 메인 페이지로 이동
        const data = await result.json();

        console.log(data)

        if (data.status === 4091) {
            // 4091은 문제가 없다는 것을 뜻하므로 메인 페이지로 이동
            navigate('/signin');
            return;
        }

        // 문제가 있을 경우 에러 메시지를 사용자에게 알려준다.
        alert(data.message);
    }


    return (
        <SignUpPresenter
            SignUp={SignUp}

            userInfo={userInfo}
            setUserInfo={setUserInfo}

            step={step}
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}

            navigate={navigate}

            countryList={countryList}
            majorList={majorList}
            dietList={dietList}
            religionList={religionList}
            languageList={languageList}
            hobbyList={hobbyList}
        />
    )
}

export default SignUpContainer;