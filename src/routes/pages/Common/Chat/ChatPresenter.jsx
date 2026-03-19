import React from "react";
import { MainLayout, Top, Content } from "../../../../components";
import { useNavigate } from "react-router-dom";

const ChatPresenter = ({

}) => {

    const navigate = useNavigate();

    return(
        <>
            <MainLayout
                footer={true}
                backgroundColor={'white'}
            >
                <Top
                    title={"Chats"}
                    showIcon={'user'}
                />
                <Content>
                    <div>Chat</div>
                </Content>
            </MainLayout>
        </>
    )
}

export default ChatPresenter;