import 'bootstrap/dist/css/bootstrap.min.css';
import './about.component.scss';
import EducationItem from '../../components/education.component.jsx';
import wisconsinImage from '../../assets/images/wisconsin.svg'

const About = () => {
  return (
    <div className='about-page'>
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <section className="about-content">
        <p>We are a company that specializes in something. Our mission is to do something to help our clients.</p>
      </section>

      <section className="about-education">
        <h2>Education History</h2>
        <p>Information regarding my current and past education.</p>

        <EducationItem 
          logo={wisconsinImage}
          institution="University of Wisconsin - Madison"
          title1="Major: "
          description1="Computer Science | Data Science"
          timeframe="Sept. 2021 - May 2025"
          title2="Relevant Coursework: "
          description2=""
        />
        <EducationItem className="troy"
          logo={wisconsinImage}
          institution="Troy High School"
          title1="Major: "
          description1="Computer Science | Data Science"
          timeframe="Sept. 2021 - May 2025"
          title2="Relevant Coursework: "
          description2=""
        />
      </section>
    </div>
  );
};

export default About;