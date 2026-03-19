import React, { useState } from "react";
import DetailGroupPresenter from "./DetailGroupPresenter";
import { useParams, useNavigate  } from "react-router-dom";

const DetailGroupContainer = ({
    userInfo,
}) => {

    const navigate = useNavigate();
    
    const { groupId } = useParams();

    const [groupInfo, setGroupInfo] = useState(null);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleJoinGroup = async () => {
        if (!userInfo || !userInfo.id) {
            alert("로그인이 필요합니다.");
            navigate('/signin');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/group/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    groupId: groupId,
                    userId: userInfo.id // 현재 로그인된 유저의 ID 사용
                }),
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                alert("그룹 가입에 성공했습니다!");
                // 가입 성공 후, 현재 페이지의 유저 목록을 새로고침하거나 업데이트합니다.
                // 또는 다른 페이지로 이동할 수도 있습니다.
                // setUserList(prev => [...prev, { id: userInfo.id, name: userInfo.name }]); // 로컬 상태 업데이트
                window.location.reload(); // 간단하게 페이지 새로고침
            } else {
                alert(data.message || "그룹 가입에 실패했습니다.");
            }
        } catch (error) {
            console.error("그룹 가입 API 호출 오류:", error);
            alert("네트워크 오류가 발생했습니다.");
        }
    };

    return (
        <DetailGroupPresenter
            groupInfo={groupInfo}
            userList={userList}
            handleJoinGroup={handleJoinGroup}
        />
    )
}

export default DetailGroupContainer;