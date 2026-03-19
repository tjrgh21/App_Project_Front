import React from "react";
import { MainLayout, Top, Content } from "../../../../components";
import GuideBar from "./component/GuideBar/GuideBar";

import Events from "./component/Events";
import Campuses from "./component/Campuses";
import Info from "./component/Info";
import FAQs from "./component/FAQs";

const DiscoverPresenter = ({

    selectedTab,
    handleTabSelect,
    nextEvent,
    upcomingEvents,

}) => {

    const renderContent = () => {
        switch (selectedTab) {
            case "events":
                return (<Events
                        nextEvent={nextEvent}
                        upcomingEvents={upcomingEvents}
                    />
                );
            case "campuses":
                return <Campuses />;
            case "info":
                return <Info />;
            case "faqs":
                return <FAQs />;
            default:
                return null;
        }
    };

    return (
        <>
            <MainLayout
                footer={true}
            >
                <Top
                    title={"Guide"}
                />
                <GuideBar selected={selectedTab} onSelect={handleTabSelect} />
                <Content
                    paddingTop={16}
                >
                    {renderContent()}
                </Content>
            </MainLayout>
        </>
    )
}

export default DiscoverPresenter;