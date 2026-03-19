import React from "react";
import { MainLayout, Top, Content } from "../../../../components";

const BoardPresenter = ({

}) => {
    return(
        <>
            <MainLayout
                footer={true}
            >
                <Top
                    title={"Board"}
                />
            </MainLayout>
        </>
    )
}

export default BoardPresenter;