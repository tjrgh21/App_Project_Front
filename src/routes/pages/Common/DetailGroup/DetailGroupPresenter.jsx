import React from "react";
import './DetailGroup.css';
import { MainLayout, Top } from "../../../../components";

const DetailGroupPresenter = ({
    groupInfo,
    userList,
    handleJoinGroup,
}) => {
    return (
        <MainLayout
            footer={true}
        >
            <Top
                // title={groupInfo?.name || "Loading..."}
                title={"Detail"}
                showIcon={'user'}
                sticky={true}
                top={true}
            />
            <div className="detail-group-box">
                디테일

                {/* 가입하기 버튼 */}
                <button 
                    className="join-group-button" 
                    onClick={handleJoinGroup}
                >
                    Join
                </button>
            </div>

        </MainLayout>
    )
}

export default DetailGroupPresenter;