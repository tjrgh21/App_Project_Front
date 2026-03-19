import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GroupsPresenter from "./GroupsPresenter";

const GroupsContainer = ({
    setSearchValue
}) => {

    const navigate = useNavigate();

    const [groups, setGroups] = useState([]);

    const keywordsList = [
        { label: "Sport groups ⚽", value: "Sport" },
        { label: "Study groups 📖", value: "Study" },
        { label: "Art groups 🎨", value: "Art" },
        { label: "Game groups 🎮", value: "Game" },
        { label: "Travel groups ✈️", value: "Travel" },
        { label: "Book groups 📚", value: "Book" },
        { label: "Cooking groups 🍳", value: "Cooking" },
        { label: "Language groups 🗣️", value: "Language" },
        { label: "Coding groups 🧑‍💻", value: "Coding" },
        { label: "Investment groups 📈", value: "Investment" },
        { label: "Life groups 🏠", value: "Life" },
        { label: "Pet groups 🐾", value: "Pet" },
    ];

    // API 호출 함수
    const fetchGroups = async () => {
        try {
            const response = await fetch('http://localhost:3333/group/all');
            const data = await response.json();

            console.log(data)

            if (response.ok && data.status === 'success') {
                // API 응답에서 groups 배열을 가져와 상태에 저장
                setGroups(data.groups);
            } else {
                console.error('Failed to fetch groups:', data.message);
                setGroups([]); // 실패 시 빈 배열로 설정
            }
        } catch (error) {
            console.error('Network error:', error);
            setGroups([]);
        }
    };

    // 컴포넌트가 처음 렌더링될 때 API 호출
    useEffect(() => {
        fetchGroups();
    }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

    const handleGroupClick = (groupId) => {
        // URL에 그룹 이름을 포함하여 상세 페이지로 이동
        navigate(`/groups/${groupId}`);
    };


    return (
        <GroupsPresenter
            setSearchValue={setSearchValue}
            keywords={keywordsList}
            groupData={groups}
            handleGroupClick={handleGroupClick}
        />
    )
}

export default GroupsContainer;