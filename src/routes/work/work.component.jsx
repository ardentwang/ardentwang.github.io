import React from 'react';
import Timeline from '../../components/timeline.component';

const Work = () => {
    const events = [
        {
            date: '1919',
            title: 'Innovating from the start',
            description: 'UNC President Edward Kidder Graham recognizes North Carolina’s need...'
        },
        {
            date: '1919',
            title: 'Innovating from the start',
            description: 'UNC President Edward Kidder Graham recognizes North Carolina’s need...'
        },
        // ... more events
    ];

    return (
        <div>
            <h1>History</h1>
            <Timeline events={events} />
        </div>
    );
}

export default Work;
