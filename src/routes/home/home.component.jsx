import React from 'react';
import './home.scss';
import Contact from '../../components/contact.component';

const Home = () => {
    return (
        <div className='home'>
            <section className='hero-section'>
                <h1>Welcome to My Website</h1>
                <p>This is a brief description of what we do. You can add more details here to give your visitors a quick overview of your services or products.</p>
            </section>
            <section className='featured-section'>
                <h2>Featured Items</h2>
                <div className='featured-items'>
                    {/* You can map over your featured items here and display them */}
                    <div className='featured-item'>
                        <h3>Featured Item 1</h3>
                        <p>Description for featured item 1.</p>
                    </div>
                    <div className='featured-item'>
                        <h3>Featured Item 2</h3>
                        <p>Description for featured item 2.</p>
                    </div>
                    {/* Add more featured items as needed */}
                </div>
            </section>
            <footer className="contact-footer">
                <Contact />
            </footer>
        </div>
    );
}

export default Home;
