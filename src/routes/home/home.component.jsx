import React from 'react';
import './home.scss';
import Contact from '../../components/contact.component';

const Home = () => {
    return (
        <div className='home'>
            <section className='hero-section'>
                <h1>Welcome to My Website</h1>
                <p>
                    Welcome! I'm a senior at the University of Wisconsin Madison, 
                    actively pursuing a double major in Computer Science and Data Science. 
                    Please feel free to take a 
                </p>
            </section>
            <footer className="contact-footer">
                <Contact />
            </footer>
        </div>
    );
}

export default Home;
