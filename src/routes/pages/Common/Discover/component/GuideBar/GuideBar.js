import React from 'react';
import './GuideBar.css';

import { ReactComponent as EventIcon } from '../../../../../../assets/icons/calendar.svg';
import { ReactComponent as CampusIcon } from '../../../../../../assets/icons/campsite.svg';
import { ReactComponent as InfoIcon } from '../../../../../../assets/icons/information.svg';
import { ReactComponent as FaqIcon } from '../../../../../../assets/icons/question.svg';

const guideItems = [
    { title: 'Events', icon: <EventIcon />, key: 'events' },
    { title: 'Campuses', icon: <CampusIcon />, key: 'campuses' },
    { title: (<><span>Useful</span><br /><span>Information</span></>), icon: <InfoIcon />, key: 'info' },
    { title: 'FAQs', icon: <FaqIcon />, key: 'faqs' },
];

const GuideBar = ({

    selected,
    onSelect,

}) => {
    return (
        <div className="guide-bar">
            {guideItems.map((item) => {
                const isActive = selected === item.key;
                return (
                    <div
                        key={item.key}
                        className={`guide-item ${isActive ? 'active' : ''}`}
                        onClick={() => onSelect(item.key)}
                    >
                        <div className="guide-icon" style={{ color : isActive ? '#d81837' : '#333'}}>
                            {React.cloneElement(item.icon, {
                                fill: isActive ? '#d81837' : '#333',
                            })}
                        </div>
                        <div className="guide-title">{item.title}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default GuideBar;