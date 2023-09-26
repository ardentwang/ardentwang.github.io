import React from 'react';
import './home.scss';
import Contact from '../../components/contact.component';

const Home = () => {
    return (
        <div className='home'>
            <section className='hero-section'>
                <h1>Welcome to My Website</h1>
                <p>
                    Welcome! I'm a junior at the University of Wisconsin Madison, 
                    actively pursuing a double major in Computer Science and Data Science. 
                    With a passion for AI, I currently serve as an Artificial Intelligence Researcher, 
                    diving deep into machine learning algorithms and decision-making processes. 
                    My experience ranges from software engineering internships at California ISO to teaching computer science with Juni Learning. 
                    I've also had the opportunity to work in data science in a biology setting at UCLA, adding a multidisciplinary flair to my skillset. 
                    With proven expertise in Python, Java, and JavaScript, I not only code but also empower others to learn, boasting a 100% pass rate for my mentored students. 
                    Whether it's identifying lifestyle risk factors through machine learning or presenting technical and financial demos to corporate stakeholders, I thrive at the intersection of technology, education, and actionable insights. 
                    Take a look around to explore my projects, research, and more.
                </p>
            </section>
            <footer className="contact-footer">
                <Contact />
            </footer>
        </div>
    );
}

export default Home;
