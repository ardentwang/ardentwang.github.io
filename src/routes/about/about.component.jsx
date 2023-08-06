import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.component.scss';

const About = () => {
  return (
    <div className='about-page'>
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <section className="about-content">
        <p>We are a company that specializes in something. Our mission is to do something to help our clients.</p>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <p>Meet the team that makes everything possible.</p>

        <div className="team-member">
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <h3>Jane Doe</h3>
          <p>CTO</p>
        </div>
      </section>

      <footer className="about-footer">
        <Button variant="primary">Contact Us</Button>
      </footer>
    </div>
  );
};

export default About;