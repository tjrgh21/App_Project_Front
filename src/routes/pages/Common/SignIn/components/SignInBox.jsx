import React from "react";
import './SignInBox.css'

// SignInBox와 차이점 비교 바람 (state 사용법)
export const SignInBox = ({
    id,
    setId,
    pw,
    setPw,
}) => {
    return (
        <div className="sign-in-box">
            <div className="input-box">
                <label>EMAIL ADDRESS</label>
                <input
                    type="text"
                    placeholder="University email"
                    onChange={e => { setId(e.target.value) }}
                    value={id}
                />
            </div>
            <div className="input-box">
                <label>PASSWORD</label>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => { setPw(e.target.value) }}
                    value={pw}
                />
            </div>
        </div>
    )
}