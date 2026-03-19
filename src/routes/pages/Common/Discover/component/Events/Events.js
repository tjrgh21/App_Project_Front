import React from "react";
import "./Events.css";

const Events = ({ nextEvent, upcomingEvents }) => {
    return (
        <div className="events-container">
            {/* Next Event */}
            <div className="next-event">
                <div className="next-label">NEXT UP</div>
                <img src={`/eventsImage/${nextEvent.image}.png`} alt="Next event" className="event-image" />
                <div className="event-info">
                    <div className="event-date">{nextEvent.date}</div>
                    <div className="event-title">{nextEvent.title}</div>
                    <div className="event-location">{nextEvent.location}</div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="upcoming-title">Upcoming events</div>
            <div className="upcoming-list">
                {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="event-card">
                        <img src={`/eventsImage/${event.image}.png`} alt="Event" className="event-thumb" />
                        <div className="event-details">
                            <div className="event-date-box">{event.date}</div>
                            <div className="event-info-box">
                                <div className="event-title">{event.title}</div>
                                <div className="event-location">{event.location}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
