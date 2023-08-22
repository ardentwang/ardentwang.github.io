import React from 'react';
import './timeline.component.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map(event => <TimelineEvent key={event.date} {...event} />)}
        </div>
    );
}

const TimelineEvent = ({ date, title, description }) => {
    return (
        <div className="timeline-event">
            <div className="timeline-date">{date}</div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Timeline;