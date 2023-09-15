import React from 'react';
import Timeline from '../../components/timeline.component';
import './work.component.css';
import uclaLogo from '../../assets/images/ucla.png';
import juniLogo from '../../assets/images/juni.png';
import caisoLogo from '../../assets/images/caiso.jpg';
import wiscLogo from '../../assets/images/wisconsin.png';

const Work = () => {
    const events = [
        {
            dateStart: "May 2023",
            dateEnd: "Present",
            logo: wiscLogo,
            companyName: "University of Wisconsin-Madison",
            jobTitle: "Artificial Intelligence Researcher (Undergrad)",
            description: "Engaged in an in-depth study focused on the ethics of AI decision-making at the University of Wisconsin Madison. This multi-faceted research aimed to shed light on the complexities and nuances of automated decisions, encapsulating: AI Decision Dynamics: Explored the myriad variables that influence AI decision-making processes, from foundational algorithms to external data biases, and how these elements intertwine to produce outcomes. Delved into the ethical ramifications of these decisions, especially in high-stakes situations where fairness, accountability, and transparency are paramount. Human Perception Analysis: Conducted extensive human research to ascertain societal perceptions and trust levels regarding AI ethics and decision-making. This involved curating surveys, facilitating focus groups, and employing other qualitative research methods to gather a broad spectrum of views and concerns. Data Analysis & Synthesis: Meticulously analyzed the collected survey data, utilizing a mix of quantitative and qualitative methods. Aimed to discern patterns, correlations, and insights that might inform the broader debate on AI ethics. The findings were pivotal in drawing meaningful conclusions about the evolving relationship between humans and AI, and the ethical boundaries we must consider.",
            backgroundColor: "#FF0000", 
            textColor: "#FFFFFF" 
        },
        {
            dateStart: "May 2023",
            dateEnd: "Sept 2023",
            logo: caisoLogo,
            companyName: "California ISO",
            jobTitle: "Software Engineering Intern",
            description: "Spearheaded a BDD (Behavior-Driven Development) initiative by implementing Gherkin-based Maven integration with Cucumber in Java. This effort aimed to bolster the robustness of the OASIS API, a crucial system that furnishes both real-time and historic electric grid pricing data. Conceptualized and developed a streamlined version of OASIS's official website using React. The refined application offers a more user-centric experience by prioritizing quick access to the latest XML and CSV electric pricing data, ensuring enhanced efficiency for stakeholders and users alike.",
            backgroundColor: "#FFFFFF", 
            textColor: "#36a1ff" 
        },
        {
            dateStart: "Jan 2023",
            dateEnd: "May 2023",
            logo: juniLogo,
            companyName: "Juni Learning",
            jobTitle: "Computer Science Instructor",
            description: "Experienced in teaching Python, Java, and JavaScript programming languages to students of all skill levels. Implemented hands-on, project-based learning approach to engage students and enhance their understanding of core concepts. Assessed student progress and provided regular feedback to foster improvement and development. Personally enhanced curriculum that aligns with the latest updates and packages. Mentored students on individual projects and provided one-on-one support to address their unique learning needs.",
            backgroundColor: "#5856d6", 
            textColor: "#FFFFFF" 
        },
        {
            dateStart: "May 2019",
            dateEnd: "Aug 2019",
            logo: uclaLogo,
            companyName: "UCLA Department of Molecular, Cell, and Developmental Biology",
            jobTitle: "Data Science Intern",
            description: "Worked under Professor Pellegrini at the UCLA Department of Molecular, Cell and Developmental Biology. Created a PLS Regression algorithm using Python 3, using machine learning to identify biomarkers (e.g. gene expression) related to lifestyle risk factors (e.g. smoking). Transformed PLS algorithm results into accurate and precise graphs using matplotlib on Jupiter Notebook.",
            backgroundColor: "#2774AE", 
            textColor: "#FFB300" 
        }
    ];

    return (
        <div className='work-page'>
            <h1 className='work-title'>Work History</h1>
            <Timeline events={events} />
        </div>
    );
}

export default Work;
