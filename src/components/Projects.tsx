import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Crop Recommendation App",
      description: "An Android application that predicts soil properties by processing webcam images and recommends the most suitable crops based on soil analysis, weather conditions, and plant disease data. Integrated real-time APIs for weather and disease detection to improve accuracy and enhance recommendations.",
      technologies: ["Python Libraries (NumPy, Pandas, TensorFlow)", "Machine Learning & Data Visualization", "Android Studio", "Google Firebase", "APIs (Weather & Plant Disease)"],
      // demoUrl: "#",
      // githubUrl: "#"
    },
    {
      title: "Sentiment Analysis System",
      description: "A robust NLP-powered system to analyze and classify emotions expressed in text data. Designed to process user inputs, determine sentiment polarity, and provide insights for better decision-making.",
      technologies: ["Python", "NLP", "Machine Learning", "Jupyter Notebook"],
      // demoUrl: "#",
      // githubUrl: "#"
    },
    {
      title: "Aero Deliver – Smart Drone Delivery System",
      description: "A smart drone-based delivery system to transport food packages, stationery, and small items efficiently to designated locations. Focused on reliability and real-world scalability with AI and ML-based path optimization.",
      technologies: ["Python", "Drone Technology", "Artificial Intelligence & Machine Learning"],
      // demoUrl: "#",
      // githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;