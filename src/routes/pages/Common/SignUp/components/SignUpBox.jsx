import React from "react";
import './SignUpBox.css';

export const SignUpBox = ({
    userInfo,
    setUserInfo,
    onVerifyEmail, // 학교 이메일 인증 함수 (추후 연동용)
}) => {



    return (
        <div className="sign-up-box">
            {/* 안내 문구 등으로 구분 */}
            <div className="sign-up-desc">Please enter your university email and password to create an account.</div>
            <div className="input-box">
                <label>EMAIL ADDRESS</label>
                <div className="input-row">
                    <input
                        type="text"
                        placeholder="University email"
                        value={userInfo.id}
                        onChange={e => setUserInfo(prev => ({ ...prev, id: e.target.value }))}
                    />
                    <button
                        className="verify-btn"
                        onClick={onVerifyEmail}
                        type="button"
                    >
                        이메일 인증
                    </button>
                </div>
            </div>
            <div className="input-box">
                <label>PASSWORD</label>
                <div className="input-row">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userInfo.pw}
                        onChange={e => setUserInfo(prev => ({ ...prev, pw: e.target.value }))}
                    />
                </div>
            </div>
        </div>
        
    );
};
