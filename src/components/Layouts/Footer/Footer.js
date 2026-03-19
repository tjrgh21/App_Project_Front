import './Footer.css';
import React from 'react';
import { ReactComponent as Connect } from '../../../assets/icons/connect.svg';
import { ReactComponent as Discover } from '../../../assets/icons/discover.svg';
import { ReactComponent as Board } from '../../../assets/icons/board.svg';
import { ReactComponent as Groups } from '../../../assets/icons/groups.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';

import { useNavigate, useLocation } from 'react-router-dom';

const Buttons = [
    {
        icon: <Connect fill={'#FFFFFF'}/>,
        title: 'Connect',
        url: '/'
    },
    {
        icon: <Discover fill={'#FFFFFF'}/>,
        title: 'Discover',
        url: '/discover'
    },
    {
        icon: <Board fill={'#FFFFFF'}/>,
        title: 'Board',
        url: '/board'
    },
    {
        icon: <Groups fill={'#FFFFFF'}/>,
        title: 'Groups',
        url: '/groups'
    },
    {
        icon: <Chat fill={'#FFFFFF'}/>,
        title: 'Chat',
        url: '/chat'
    },
]


const Footer = ({

}) => {

    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className='footer-container'>
            {Buttons.map((button, index) => {
                const isActive = location.pathname === button.url;
                const fillColor = isActive ? '#d81837' : '#333';
                const textColor = isActive ? '#d81837' : '#333';

                return (
                    <div
                        className='footer-icon-wrap'
                        key={index}
                        onClick={() => navigate(button.url)}
                    >
                        <div className='footer-icon' style={{ color : isActive ? fillColor : '#333'}}>
                            {
                                // SVG 컴포넌트를 다시 렌더링해서 fill 적용
                                React.cloneElement(button.icon, { fill: fillColor })
                            }
                        </div>
                        <div className='footer-text'>
                            <span className='small' style={{ color: textColor }}>
                                {button.title}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Footer;