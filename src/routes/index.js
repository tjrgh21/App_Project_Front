import React, { useState, useEffect } from "react";

/* URL 설정을 위한 라이브러리 */
import { Route, Routes, useFetcher, useNavigate, Navigate } from 'react-router-dom';

/* 사용자가 만든 페이지를 모아놓은 파일에서 페이지를 불러온다. */
import { Main, SignIn, SignUp, Chat, Discover, Profile, Groups, Board, AddGroup, DetailGroup } from "./pages";

/* 아래 부분에서 링크와 페이지를 연결시킨다. */
const Router = () => {
    /* 변수(state) 및 useEffect설정 부분 */
    const test = useState(0); // 예제를 위한 state
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    /* 예제를 위한 useEffect */
    useEffect(() => {
        fetch("http://localhost:3333/user/me", {
            credentials: "include",
        })
            .then(res => {
                if (res.status === 401) {
                    // 로그인 안됨
                    navigate('/signin');
                }
                return res.json();
            })
            .then(data => {
                if (data.status === "success") {
                    setUserInfo(data.user);
                    console.log("data.user: ", data.user)
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                navigate('/signin');
            });
    }, []); // []로 설정이 되어 있으므로 페이지가 로드될 때 한번만 실행된다

    const SignOut = () => {
        setUserInfo(null);
    }

    if (loading) return;

    /* 출력할 페이지 설정 부분 */
    return (
        /* 리액트의 경우 return에 존재하는 최상위 태그는 하나여야 한다. */
        <div className="app">
            {/* URL설정을 위한 태그 */}
            <Routes>
                {/* 
                    path: URL
                        * path="/user"인 경우 http://localhost:3000/user로 접근 가능
                    element: 출력할 페이지
                        * 위에서 import한 페이지만 사용 가능
                */}
                <Route
                    path="/"
                    /*
                        사용자가 만든 페이지
                        * 윈도우의 경우 Ctrl을 누르신 뒤 App을 클릭하시면 해당 파일로 이동하실 수 있습니다.
                        * 맥의 경우 Command를 누르신 뒤 App을 클릭하시면 해당 파일로 이동하실 수 있습니다.
                    */
                    element={
                        userInfo ?
                            <Main userInfo={userInfo} />
                            : <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/signin"
                    element={<SignIn
                        setUserInfo={setUserInfo}
                    />}
                />
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
                <Route
                    path="/chat"
                    element={
                        userInfo ?
                            <Chat userInfo={userInfo} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/groups"
                    element={
                        userInfo ?
                            <Groups userInfo={userInfo} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="'/groups/:groupName"
                    element={
                        userInfo?
                        <DetailGroup userInfo={userInfo}/>
                        :
                        <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/addgroup"
                    element={
                        userInfo ?
                            <AddGroup userInfo={userInfo} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/discover"
                    element={
                        userInfo ?
                            <Discover userInfo={userInfo} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/board"
                    element={
                        userInfo ?
                            <Board userInfo={userInfo} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
                <Route
                    path="/profile"
                    element={
                        userInfo ?
                            <Profile userInfo={userInfo} SignOut={SignOut} />
                            :
                            <Navigate to="/signin" replace />
                    }
                />
            </Routes>
        </div>
    )
}

/* App/App.js에서 import하기 위한 설정 */
export default Router;