import React from "react";
import './Groups.css';
import { MainLayout, Top, Content, SearchInput } from "../../../../components";

const GroupsPresenter = ({
    setSearchValue,
    keywords,
    groupData,
    handleGroupClick,
}) => {
    return (
        <>
            <MainLayout
                footer={true}
            >
                <Top
                    title={"Groups"}
                    showIcon={'plus'}
                    sticky={true}
                    top={true}
                />
                <SearchInput
                    setSearchValue={setSearchValue}
                    keywords={keywords}
                />
                <div className="group-card-wrap">
                    {groupData.map((group, index) => (
                        <Content
                            key={index}
                            className="group-card"
                            styles={{
                                width: "calc(50% - 10px)",
                                aspectRatio: "1 / 1", // 정사각형
                                position: "relative",
                                borderRadius: "16px",
                                overflow: "hidden",
                                cursor: 'pointer',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                            }}
                            onClick={handleGroupClick}
                        >
                            <img
                                src={`/groupsImage/${group.name}.png`}
                                alt={group.name}
                                className="group-img"
                                onError={e => { e.target.src = '/groupsImage/default.png'; }}
                            />
                            <div className="group-info">
                                <strong>{group.name}</strong>
                                <span className="group-members">
                                    {/* {group.members} */}

                                    0 members</span>
                            </div>
                        </Content>
                    ))}
                </div>
            </MainLayout>
        </>
    )
}

export default GroupsPresenter;