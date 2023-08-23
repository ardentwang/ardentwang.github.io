import 'bootstrap/dist/css/bootstrap.min.css';
import './about.component.scss';
import EducationItem from '../../components/education.component.jsx';
import wisconsinImage from '../../assets/images/wisconsin.svg';
import troyImage from '../../assets/images/troy.jpg';

const About = () => {
  return (
    <div className='about-page'>
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <section className="about-content">
        <h2>Education History</h2>
        <p>Information regarding my current and past education.</p>
      </section>
      <section className="about-education">
        <EducationItem 
          logo={wisconsinImage}
          institution="University of Wisconsin - Madison"
          title1="Major: "
          description1="Computer Science | Data Science"
          timeframe="Sept. 2021 - May 2025"
          title2="Relevant Coursework: "
          description2="Programming II, Intro to Computer Engineering, Calculus & Analytic Geometry 2,
          Intro to Discrete Mathematics, Programming III, Machine Organization & Programming, Data Science Modeling I,
          Data Science Programming I, Introduction to Algorithms, Data Science Modeling II, Elem Matrix & Linear Algebra"
          bgColor='#ffffff'
          textColor='#ff0000'
        />
        <EducationItem 
          logo={troyImage}
          institution="Troy High School"
          title1="Programs Completed: "
          description1="Troy Tech Magnet Program | IB Diploma Program"
          timeframe="Aug. 2017 - May 2021"
          title2="Relevant Coursework: "
          description2="AP CompSci Principles, AP CompSci A, IB CompSci SL, IB CompSci HL"
          bgColor='#D22B2B'
        />
      </section>
    </div>
  );
};

export default About;