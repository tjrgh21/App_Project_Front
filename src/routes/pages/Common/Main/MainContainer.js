import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPresenter from "./MainPresenter";
import { countryList } from "../SignUp/components/SelectList";

/* 
    하나의 페이지를 Container와 Presenter로 분리하고 각 역할은 아래와 같다

    * Container: 백엔드에서 데이터를 불러와 state 관리, 로직을 담당하는 함수 선언
    * Presenter: 불러온 데이터를 토대로 페이지에 출력, 함수 사용
*/
const MainContainer = ({
    setSearchValue,
}) => {
    // 페이지 이동을 위한 외부 함수
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);

    const keywordsList = [
    { label: "Same nationality 🌍", value: "nationality" },
    { label: "Same language 🗣️", value: "language" },
    { label: "Same major 🎓", value: "major" },
    { label: "Same diet 🥗", value: "diet" },
    { label: "Same religion 🙏", value: "religion" },
    { label: "Same hobby 🎨", value: "hobby" },
];

    useEffect(() => {
        fetch('http://localhost:3333/user/all')
            .then(res => res.json())
            .then(data => {
                console.log("서버 응답:", data);
                setUserData(data);
            })
            .catch(err => {
                console.error("유저 불러오기 실패", err);
                setUserData([]);
            });
    }, []);

    function getCountryName(code) {
        const found = countryList.find(c => c.code === code);
        return found ? found.name : code;
    }
    


    /*
        Container는 Presenter만 반환한다

        * Container에서 선언한 함수를 Presenter에게 props로 넘겨주어 사용한다.
    */
    return (
        <MainPresenter


            userData={userData}

            getCountryName={getCountryName}

            // userInfo={userInfo}
            // setUserInfo={setUserInfo}

            navigate={navigate}

            setSearchValue={setSearchValue}
            keywords={keywordsList}
        />
    )
}

export default MainContainer;