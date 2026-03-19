import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddGroupPresenter from "./AddGroupPresenter";

const AddGroupContainer = ({

}) => {
    const navigate = useNavigate();

    const [groupInfo, setGroupInfo] = useState({
        name: '',
        keyword: '',
    })

    const GroupKeywords = [
        "Sport", "Study", "Art", "Game", "Travel", "Book",
        "Cooking", "Language", "Coding", "Investment", "Life", "Pet", "Other",
    ];

    // 그룹 추가 API 호출 로직
    const addGroup = async () => {
        // 유효성 검사
        if (!groupInfo.name) {
            alert('그룹 이름을 입력해주세요!');
            return;
        }
        if (!groupInfo.keyword) {
            alert('키워드를 선택해주세요!');
            return;
        }

        try {
            // API 연결
            const result = await fetch('http://localhost:3333/group/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // groupInfo 객체를 JSON 문자열로 변환하여 전송
                body: JSON.stringify(groupInfo),
            });

            const data = await result.json();

            console.log(data);

            if (data.status === 'success') {
                alert('그룹이 성공적으로 생성되었습니다!');
                // 성공 시 그룹 목록 페이지 또는 다른 페이지로 이동
                navigate('/groups'); // 예시 경로, 실제 경로로 변경
            } else {
                // 실패 시 백엔드에서 받은 에러 메시지 표시
                alert(data.message || '그룹 생성에 실패했습니다.');
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
            alert('네트워크 오류가 발생했습니다.');
        }
    };

    return (
        <AddGroupPresenter
            addGroup={addGroup}

            groupInfo={groupInfo}
            setGroupInfo={setGroupInfo}
            GroupKeywords={GroupKeywords}
        />
    )
}

export default AddGroupContainer;