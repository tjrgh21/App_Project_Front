import React from "react";
import './AddGroup.css';
import { MainLayout, Top, Button } from "../../../../components";

const AddGroupPresenter = ({
    groupInfo,
    setGroupInfo,
    GroupKeywords,
    addGroup,
}) => {
    return (
        <MainLayout
            footer={true}
        >
            <Top
                title={"Add Group"}
                showIcon={'user'}
                sticky={true}
                top={true}
                paddingBottom={'3rem'}
            />
            <div className="add-group-box">
                <div className="add-group-desc">Please enter Group Name</div>
                <div className="input-box">
                    <div className="input-box">
                        <label>GROUP NAME</label>
                        <input
                            type="text"
                            placeholder="Please enter Group Name"
                            value={groupInfo.name}
                            onChange={e => setGroupInfo(prev => ({ ...prev, name: e.target.value }))}
                        />
                    </div>
                </div>

                <div className="input-box">
                    <label>Keyword<span className="required"></span></label>
                    <select
                        value={groupInfo.keyword}
                        onChange={e => setGroupInfo(prev => ({ ...prev, keyword: e.target.value }))}
                    >
                        <option value="">Select Keyword</option>
                        {GroupKeywords.map(k => (
                            <option key={k} value={k}>{k}</option>
                        ))}
                    </select>
                </div>

                <Button
                    title={"Create Group"}
                    fontSize={"1.2rem"}
                    fontWeight={600}
                    wrapPadding={15}
                    backgroundColor={'#d81837'}
                    onClick={addGroup}
                />
            </div>

        </MainLayout>
    )
}

export default AddGroupPresenter