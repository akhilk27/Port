import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    date: 'Jan 2024 - May 2024',
    title: 'Graduate Assistant',
    company: 'University of North Carolina at Charlotte',
    description: [
      'Assisted students in coursework covering machine learning algorithms, frameworks, and data analysis, providing hands-on support and guidance to enhance their understanding and application of key concepts.', 'Supported the professor in teaching and grading, including quality checking student code and projects, evaluating machine learning models, and providing detailed reports on performance and improvements needed.'
    ],
    tools: ['Python', 'Jupyter', 'Tableau', 'TensorFlow', 'Scikit-Learn', 'PyTorch', 'Keras', 'Pandas', 'NumPy']
  },
  {
    id: 3,
    date: 'May 2023 - Aug 2023',
    title: 'Data Science Engineer',
    company: 'Wi-Tronix, Bolingbrook, United States',
    description: [
      "Evaluated and implemented a new labeling tool, achieving reduction in data labeling time and increase in overall data processing efficiency, aligning with Wi-Tronix's business goals within established timelines",
      "Participated in design discussions for seamless data migration, architected annotation conversion, and developed migration scripts, ensuring data integrity.",
      "Engineered robust scripts for data extraction and management, significantly reducing manual data processing time and enhancing data retrieval and updates within databases using CSV sources.",
      "Contributed to data cleaning and analysis efforts using Python libraries like Pandas, facilitating accurate decision-making, and improved business strategies."
    ],
    tools: [
      'Python', 'Scikit-Learn', 'Numpy', 'Pandas', 'SQL', 'S3', 'GIT', 'MySQL', 'SQL Server Management Studio', 'Tableau', 'V7', 'SuperAnnotate'
    ]
  },
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((experience) => (
        <div className="work-experience-item" key={experience.id}>
          <div className="work-experience-date">
            <p>{experience.date}</p>
          </div>
          <div className="work-experience-details">
            <h3>
              {experience.title} -{' '}
              <span className="company-name">{experience.company}</span>
            </h3>
            <div className="work-experience-description">
              {experience.description.map((point, index) => (
                <p key={index}>• {point}</p>
              ))}
            </div>
            <div className="work-experience-tools">
              {experience.tools.map((tool, index) => (
                <span className="tool-badge" key={index}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
