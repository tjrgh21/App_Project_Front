import React from "react";
import './SignUpProfile.css';

export const SignUpProfile = ({
    userInfo,
    setUserInfo,
    countryList,
    majorList,
    dietList,
    religionList,
    languageList,
    hobbyList,
    goToPrevStep,
    onSubmit,   // 마지막 제출 버튼용
}) => {

    const MAX_LANGUAGES = 2;
    const MAX_HOBBIES = 2;

    // 언어 선택 핸들러
    // 언어 변경 핸들러 (useRef 없이)
    const handleLanguageChange = (idx, value) => {
        if (idx === 1 && (!userInfo.language1 || userInfo.language1 === "")) {
            // 언어1이 비어있을 때 언어2를 선택하면 언어1에 값 이동, 언어2는 빈값
            setUserInfo(prev => ({
                ...prev,
                language1: value,
                language2: ""
            }));
        } else {
            setUserInfo(prev => ({
                ...prev,
                [`language${idx + 1}`]: value
            }));
        }
    };

    // 취미 변경 핸들러 (useRef 없이)
    const handleHobbyChange = (idx, value) => {
        if (idx === 1 && (!userInfo.hobby1 || userInfo.hobby1 === "")) {
            setUserInfo(prev => ({
                ...prev,
                hobby1: value,
                hobby2: ""
            }));
        } else {
            setUserInfo(prev => ({
                ...prev,
                [`hobby${idx + 1}`]: value
            }));
        }
    };

    return (
        <div className="sign-up-profile-box">
            <div className="profile-desc">Enter your personal information to finish signing up.</div>

            {/* 이름 */}
            <div className="input-box">
                <label>Name (이름)<span className="required"></span></label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={userInfo.name}
                    onChange={e => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                />
            </div>

            {/* 국적 */}
            <div className="input-box">
                <label>Nationality (국적)<span className="required"></span></label>
                <select
                    value={userInfo.nationality}
                    onChange={e => setUserInfo(prev => ({ ...prev, nationality: e.target.value }))}
                >
                    <option value="">Select nationality</option>
                    {countryList.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* 도시 */}
            <div className="input-box">
                <label>City (도시)<span className="required"></span></label>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={userInfo.city}
                    onChange={e => setUserInfo(prev => ({ ...prev, city: e.target.value }))}
                />
            </div>

            {/* 언어 */}
            <div className="input-box">
                <label>Languages (언어)<span className="required"></span></label>
                <div className="select-row">
                    <div className="select-col">
                        <span className="select-label">Language 1<span className="required"></span></span>
                        <select
                            value={userInfo.language1}
                            onChange={e => handleLanguageChange(0, e.target.value)}
                            required
                        >
                            <option value="">Select language</option>
                            {languageList.map(lang => (
                                <option
                                    key={lang.value}
                                    value={lang.value}
                                    disabled={userInfo.language2 === lang.value}
                                >
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="select-col">
                        <span className="select-label">Language 2<span className="verical"></span></span>
                        <select
                            value={userInfo.language2}
                            onChange={e => handleLanguageChange(1, e.target.value)}
                        >
                            <option value="">Select language</option>
                            {languageList.map(lang => (
                                <option
                                    key={lang.value}
                                    value={lang.value}
                                    disabled={userInfo.language1 === lang.value}
                                >
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>


            {/* 전공 */}
            <div className="input-box">
                <label>Major (전공)<span className="required"></span></label>
                <select
                    value={userInfo.major}
                    onChange={e => setUserInfo(prev => ({ ...prev, major: e.target.value }))}
                >
                    <option value="">Select major</option>
                    {majorList.map(m => (
                        <option key={m.value} value={m.value}>
                            {m.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* 식습관 */}
            <div className="input-box">
                <label>Diet (식습관)<span className="required"></span></label>
                <select
                    value={userInfo.diet}
                    onChange={e => setUserInfo(prev => ({ ...prev, diet: e.target.value }))}
                >
                    <option value="">Select diet</option>
                    {dietList.map(d => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                </select>
            </div>

            {/* 종교 */}
            <div className="input-box">
                <label>Religion (종교)<span className="required"></span></label>
                <select
                    value={userInfo.religion}
                    onChange={e => setUserInfo(prev => ({ ...prev, religion: e.target.value }))}
                >
                    <option value="">Select religion</option>
                    {religionList.map(r => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                </select>
            </div>

            {/* 취미 */}
            <div className="input-box">
                <label>Hobbies (취미)</label>
                <div className="select-row">
                    <div className="select-col">
                        <span className="select-label">Hobby 1<span className="verical"></span></span>
                        <select
                            value={userInfo.hobby1}
                            onChange={e => handleHobbyChange(0, e.target.value)}
                            required
                        >
                            <option value="">Select hobby</option>
                            {hobbyList.map(hobby => (
                                <option
                                    key={hobby.value}
                                    value={hobby.value}
                                    disabled={userInfo.hobby2 === hobby.value}
                                >
                                    {hobby.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="select-col">
                        <span className="select-label">Hobby 2<span className="verical"></span></span>
                        <select
                            value={userInfo.hobby2}
                            onChange={e => handleHobbyChange(1, e.target.value)}
                        >
                            <option value="">Select hobby</option>
                            {hobbyList.map(hobby => (
                                <option
                                    key={hobby.value}
                                    value={hobby.value}
                                    disabled={userInfo.hobby1 === hobby.value}
                                >
                                    {hobby.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>


            <div className="profile-btn-row">
                <button className="prev-btn" type="button" onClick={goToPrevStep}>Back</button>
                <button className="submit-btn" type="button" onClick={onSubmit}>Sign Up</button>
            </div>
        </div>
    );
};