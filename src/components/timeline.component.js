import React from 'react';
import './timeline.component.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map(event => <TimelineEvent key={event.date} {...event} />)}
        </div>
    );
}

const TimelineEvent = ({ 
    dateStart, 
    dateEnd, 
    logo, 
    companyName, 
    jobTitle, 
    description, 
    backgroundColor, 
    textColor 
}) => {
    return (
        <div className="timeline-event" style={{ 
            "--backgroundColor": backgroundColor || "#f9f9f9",
            "--textColor": textColor || "#333333" 
        }}>
            <div className="timeline-content">
                <div className="timeline-logo">
                    <img src={logo} alt={companyName} />
                    <h3 className="timeline-company">{companyName}</h3>
                </div>
                <h4 className="timeline-title">{jobTitle}</h4>
                <span>{dateStart}</span> - <span>{dateEnd}</span>
                <p>{description}</p>
            </div>
        </div>
    );
}



export default Timeline;
