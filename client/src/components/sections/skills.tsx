  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "FastAPI", "Flask", "Streamlit", "PHP"]
    },
    {
      title: "Data Science, AI/ML", 
      skills: ["Pandas", "NumPy", "TensorFlow", "Data Analysis", "OpenCV", "Statistical Modelling", "Feature Engineering", "Data Preprocessing",
         "Predictive Analytics", "Machine Learning (DL, NLP)"]
        //  "Scikit-Learn"
    },
    {
      title: "Infrastructure & Tools",
      skills: ["AWS", "Docker", "SQL/NoSQL", "MySQL Workbench", "MongoDB", "Git", "Data Visualization Tools : Matplotlib, Plotly, Seaborn, Powerbi"]
      // "SQL Server Management"
    }
  ];
export default function Skills() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-bold text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
