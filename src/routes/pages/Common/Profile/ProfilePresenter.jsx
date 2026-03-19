import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout, Top } from "../../../../components";
import './Profile.css'

const ProfilePresenter = ({
    userInfo,
    setUserInfo,
    countryList,
    majorList,
    dietList,
    religionList,
    languageList,
    hobbyList,
    onUpdate, // 저장시 호출될 함수 (백엔드 연동)
    SignOut,
}) => {

    

    const [editMode, setEditMode] = useState(false);
    // 복사본(임시 변경값)으로 관리
    const [editUser, setEditUser] = useState(userInfo);

    if (!userInfo) return null;

    const handleEdit = () => {
        setEditUser(userInfo);
        setEditMode(true);
    };
    const handleCancel = () => setEditMode(false);
    const handleSave = () => {
        onUpdate(editUser);
        setEditMode(false);
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setEditUser(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // 언어/취미: 두 개(1,2) 지원 (ex: Korean, English)
    const handleMultiChange = (field, idx, value) => {
        setEditUser(prev => ({
            ...prev,
            [field + (idx + 1)]: value,
        }));
    };

    return (
        <>
            <MainLayout
                footer={true}
            >
                <Top
                    title={"Mypage"}
                    showIcon={"home"}
                    top={true}
                />
                <div className="profile-container">
                    <h2 style={{ color: "#d81837", fontWeight: "bold", fontSize: "1.3rem" }}>My Profile</h2>
                    <img
                        src={`/userImage/${userInfo.userId}.png`}
                        onError={e => { e.target.src = '/userImage/default.png'; }}
                        style={{
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                    {/* 이름 */}
                    <div className="input-box">
                        <label>Name</label>
                        {editMode ? (
                            <input name="name" value={editUser.name} onChange={handleChange} />
                        ) : <span>{userInfo.name}</span>}
                    </div>

                    {/* 국적 */}
                    <div className="input-box">
                        <label>Nationality</label>
                        {editMode ? (
                            <select name="nationality" value={editUser.nationality} onChange={handleChange}>
                                <option value="">Select</option>
                                {countryList.map(c => (
                                    <option key={c.code} value={c.code}>{c.name}</option>
                                ))}
                            </select>
                        ) : <span>{countryList.find(c => c.code === userInfo.nationality)?.name || userInfo.nationality}</span>}
                    </div>

                    {/* 도시 */}
                    <div className="input-box">
                        <label>City</label>
                        {editMode ? (
                            <input name="city" value={editUser.city} onChange={handleChange} />
                        ) : <span>{userInfo.city}</span>}
                    </div>

                    {/* 전공 */}
                    <div className="input-box">
                        <label>Major</label>
                        {editMode ? (
                            <select name="major" value={editUser.major} onChange={handleChange}>
                                <option value="">Select</option>
                                {majorList.map(m => (
                                    <option key={m.value} value={m.value}>{m.label}</option>
                                ))}
                            </select>
                        ) : <span>{majorList.find(m => m.value === userInfo.major)?.label || userInfo.major}</span>}
                    </div>

                    {/* 언어 */}
                    <div className="input-box">
                        <label>Languages</label>
                        <div className="select-row">
                            {[0, 1].map(idx => (
                                <div className="select-col" key={idx}>
                                    {editMode ? (
                                        <select
                                            name={`language${idx + 1}`}
                                            value={editUser[`language${idx + 1}`] || ""}
                                            onChange={e => handleMultiChange("language", idx, e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            {languageList.map(lang => (
                                                <option key={lang.value} value={lang.value}>
                                                    {lang.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <span>
                                            {languageList.find(l => l.value === userInfo[`language${idx + 1}`])?.label || userInfo[`language${idx + 1}`]}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 식습관 */}
                    <div className="input-box">
                        <label>Diet</label>
                        {editMode ? (
                            <select name="diet" value={editUser.diet} onChange={handleChange}>
                                <option value="">Select</option>
                                {dietList.map(d => (
                                    <option key={d.value} value={d.value}>{d.label}</option>
                                ))}
                            </select>
                        ) : <span>{dietList.find(d => d.value === userInfo.diet)?.label || userInfo.diet}</span>}
                    </div>

                    {/* 종교 */}
                    <div className="input-box">
                        <label>Religion</label>
                        {editMode ? (
                            <select name="religion" value={editUser.religion} onChange={handleChange}>
                                <option value="">Select</option>
                                {religionList.map(r => (
                                    <option key={r.value} value={r.value}>{r.label}</option>
                                ))}
                            </select>
                        ) : <span>{religionList.find(r => r.value === userInfo.religion)?.label || userInfo.religion}</span>}
                    </div>

                    {/* 취미 */}
                    <div className="input-box">
                        <label>Hobbies</label>
                        <div className="select-row">
                            {[0, 1].map(idx => (
                                <div className="select-col" key={idx}>
                                    {editMode ? (
                                        <select
                                            name={`hobby${idx + 1}`}
                                            value={editUser[`hobby${idx + 1}`] || ""}
                                            onChange={e => handleMultiChange("hobby", idx, e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            {hobbyList.map(hobby => (
                                                <option key={hobby.value} value={hobby.value}>
                                                    {hobby.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <span>
                                            {hobbyList.find(h => h.value === userInfo[`hobby${idx + 1}`])?.label || userInfo[`hobby${idx + 1}`]}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 버튼 영역 */}
                    <div className="profile-btn-row">
                        {editMode
                            ? <>
                                <button className="submit-btn"
                                // onClick={handleSave}
                                >저장</button>
                                <button className="prev-btn" onClick={handleCancel}>취소</button>
                            </>
                            :
                            <>
                                <button className="submit-btn" onClick={handleEdit}>수정</button>
                                <button className="prev-btn" onClick={SignOut}>
                                    로그아웃
                                </button>
                            </>
                        }
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default ProfilePresenter;