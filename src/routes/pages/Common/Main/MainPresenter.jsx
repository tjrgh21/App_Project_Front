import React from "react";
/*
    아래 import는 컴포넌트를 불러오는 코드
    아래와 같이 불러오는 이유는 BackConnectTest.jsx에서 export const를 했기 때문이다.
      * 만약 export default const BackConnectTest를 헀다면 중괄호는 불필요
*/
import { BackConnectTest } from "./components/BackConnectTest";
import { DBConnectTest } from "./components/DBConnectTest";
import { Navigate } from "./components/Navigate";


import './Main.css';
import { MainLayout, Content, Top, SearchInput } from "../../../../components";
import { useNavigate } from "react-router-dom";

/* 
    하나의 페이지를 Container와 Presenter로 분리하고 각 역할은 아래와 같다

    * Container: 백엔드에서 데이터를 불러와 state 관리, 로직을 담당하는 함수 선언
    * Presenter: 불러온 데이터를 토대로 페이지에 출력, 함수 사용
*/
/*
    ※ 컴포넌트 이름(함수 이름)은 무조건 대문자로 시작해야 함!! ※
    만약 소문자로 시작한다면 컴포넌트를 출력할 수 없으므로 반드시 주의해서 작성할 것
*/
const MainPresenter = ({
    userData,
    setSearchValue,
    keywords,
    getCountryName,
}) => {

    const navigate = useNavigate();
    /*
        Presenter에서는 단순히 받아온 데이터를 어떻게 보여줄 것인지만 표현한다.

        * 물론 예외는 있다.
    */

    return (
        <>
            <MainLayout
                footer={true}
            >
                <Top
                    title={"Connenct"}
                    showIcon={'connect'}
                    sticky={true}
                    top={true}
                />
                <SearchInput
                    setSearchValue={setSearchValue}
                    keywords={keywords}
                />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                }}>
                    <div className="main-card-wrap">
                        {userData.map((user) => {
                            return (
                                <Content
                                    className={'flex-content'}
                                    border={true}
                                    paddingBottom={15}
                                    paddingTop={15}
                                    paddingLeft={15}
                                    paddingRight={15}
                                    gap={10}
                                >
                                    <img
                                        src={`/userImage/${user.id}.png`}
                                        onError={e => { e.target.src = '/userImage/default.png'; }}
                                        style={{
                                            width: "55px",
                                            height: "55px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginBottom: "8px"
                                        }}
                                    />
                                    <strong style={{ fontSize: '15px', fontWeight: 'bold', padding:'2px' }}>{user.name}</strong>
                                    <span style={{}}>🌍 {getCountryName(user.nationality)}</span>
                                    <span style={{}}>🏡 {user.city}</span>
                                    <span style={{}}>❤️ {[user.hobby1, user.hobby2].filter(Boolean).join(', ')}</span>

                                    <button className="connect-btn">Connect</button>
                                </Content>
                            )
                        })}
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default MainPresenter;