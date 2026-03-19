import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ProfilePresenter from "./ProfilePresenter";

import { countryList, majorList, dietList, religionList, languageList, hobbyList } from "../SignUp/components/SelectList";

const ProfileContainer = ({
    SignOut,
}) => {

    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

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
            })
            .catch(() => {
                navigate('/signin');
            });
    }, []);

    console.log("userInfo:", userInfo)

    return (
        <ProfilePresenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            SignOut={SignOut}

            countryList={countryList}
            majorList={majorList}
            dietList={dietList}
            religionList={religionList}
            languageList={languageList}
            hobbyList={hobbyList}
        />
    )
}

export default ProfileContainer;