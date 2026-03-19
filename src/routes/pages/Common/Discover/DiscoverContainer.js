import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiscoverPresenter from "./DiscoverPresenter";
import GroupsImage from '../../../../assets/profile-default.jpg'

const DiscoverContainer = ({

}) => {

    const [selectedTab, setSelectedTab] = useState("events");

    const nextEvent = {
    image: "Basketball",
    title: "Basketball Game",
    date: "20 Sep",
    location: "Sports Hall 2 Entrance 1"
};

const upcomingEvents = [
    {
        image: "University Introduction Day",
        title: "University Introduction Day",
        date: "13 Feb",
        location: "Goin’ University"
    },
    {
        image: "Music Lovers Meeting",
        title: "Music Lovers Meeting",
        date: "17 Feb",
        location: "Jeremy’s Pub"
    }
];


    // 탭 전환 로직 (추후 필요 시 데이터 fetch 로직 추가 가능)
    const handleTabSelect = (tabKey) => {
        setSelectedTab(tabKey);
    };
    return (
        <DiscoverPresenter
            selectedTab={selectedTab}
            handleTabSelect={handleTabSelect}
            nextEvent = {nextEvent}
            upcomingEvents={upcomingEvents}
        />
    )
}

export default DiscoverContainer;