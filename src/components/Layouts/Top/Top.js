import './Top.css';
import { ReactComponent as Map } from '../../../assets/icons/map.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { ReactComponent as Profile } from '../../../assets/icons/profile.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { useNavigate } from 'react-router-dom';

const Top = ({
    title,
    showIcon,
    iconColor,
    absolute,
    top,
    paddingBottom,
    sticky,
}) => {

    /* ===== NAVIGATE ===== */
    const navigate = useNavigate();

    return (
        <div
            className='top-container'
            style={{
                position: absolute ? 'absolute' : sticky ? 'sticky' : 'relative',
                top: top ? 0 : 'none',
                paddingBottom: paddingBottom,
            }}
        >
            {/* <div className='top-back'>
                <Back
                    fill={iconColor ? iconColor : '#000000'}
                    onClick={ link ? () => { navigate(link) } : () => { navigate(-1) }}
                />
            </div> */}
            {
                title ? (
                    <div className='top-title-wrap'>
                        <span className='top-title'>
                            {title}
                        </span>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className='top-icons'>
                {
                    showIcon === 'connect' ? (
                        <>
                            <Menu
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/') }}
                            />
                            <Map
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/') }}
                            />
                            <Profile
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/profile') }}
                            />
                        </>
                    ) : showIcon === 'plus' ? (
                        <>
                            <Plus
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/addgroup') }}
                            />
                            <Profile
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/profile') }}
                            />
                        </>
                    ) : showIcon === 'user' ? (
                        <Profile
                            fill={iconColor ? iconColor : '#005abd'}
                            onClick={() => { navigate('/profile') }}
                        />
                    ) : showIcon === 'home' ? (
                        <Home
                            fill={iconColor ? iconColor : '#005abd'}
                            onClick={() => { navigate('/') }}
                        />
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    );
};

export default Top;