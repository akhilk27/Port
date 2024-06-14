import React from 'react';
import './Skills.css';

const skills = {
  Languages: ['Python', 'Java', 'C++', 'C', 'PHP', 'R', 'SQL', 'Ruby'],
  'Web Technologies': ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Express', 'NodeJS', 'VueJS', 'Spring Boot', 'Angular'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  Frameworks: ['.Net', 'NodeJS', 'REST', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'PySpark', 'Matplotlib', 'Django', 'Seaborn', 'Pandas', 'Numpy'],
  Tools: ['GitHub', 'Power BI', 'Tableau', 'Jupyter Notebook', 'Visual Studio Code', 'Word Press', 'MYSQL Workbench', 'Docker'],
  "Cloud Technologies": ['AWS', 'Azure DevOps', 'Google Cloud'],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills[category].map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-cell">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
