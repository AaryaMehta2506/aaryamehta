import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  TrendingUp,
  Bot,
  ArrowRightLeft,
  Languages,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Crop Recommendation App",
    description:
      "An Android application that predicts soil properties by processing webcam images and recommends the most suitable crops based on soil analysis, weather conditions, and plant disease data. Integrated real-time APIs for weather and disease detection to improve accuracy and enhance recommendations.",
    technologies: ["Python Libraries (NumPy, Pandas, TensorFlow)", "Machine Learning & Data Visualization", "Android Studio", "Google Firebase", "APIs (Weather & Plant Disease)"],
    featured: true,
  },
  {
    title: "Sentiment Analysis System",
    description:
      "A robust NLP-powered system to analyze and classify emotions expressed in text data. Designed to process user inputs, determine sentiment polarity, and provide insights for better decision-making.",
    technologies: ["Python", "NLP", "Machine Learning", "Jupyter Notebook"],
    featured: true,
  },
  // {
  //   title: "Aero Deliver – Smart Drone Delivery System",
  //   description:
  //     "A smart drone-based delivery system to transport food packages, stationery, and small items efficiently to designated locations. Focused on reliability and real-world scalability with AI and ML-based path optimization.",
  //   technologies: ["Python", "Drone Technology", "Artificial Intelligence & Machine Learning"],
  //   featured: true,
  // },
  {
    title: "Customer Churn Prediction",
    description:
      "A machine learning model designed to predict customer churn based on behavioral and transactional data. The system helps businesses identify at-risk customers and take proactive retention measures to improve customer satisfaction and reduce revenue loss.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Data Visualization", "Machine Learning"],
    featured: true,
  },
  {
    title: "Movie Recommender System",
    description:
      "A personalized movie recommendation engine built using collaborative and content-based filtering techniques. Suggests movies based on user preferences, viewing history, and similarity metrics to enhance user engagement.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Recommender Systems"],
    featured: true,
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "A deep learning model trained on the MNIST dataset to recognize handwritten digits. Implements a Convolutional Neural Network (CNN) to achieve high accuracy in image classification tasks.",
    technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN"],
    featured: true,
  },
  {
    title: "Conversational AI Chatbot",
    description:
      "An AI-powered chatbot capable of understanding user queries and generating intelligent, context-aware responses. Uses NLP techniques and neural networks to simulate natural human conversation.",
    technologies: ["Python", "NLP", "TensorFlow", "Flask", "Chatbot Framework"],
    featured: true,
  },
  {
    title: "Generative Adversarial Networks for Image Generation",
    description:
      "An implementation of GANs (Generative Adversarial Networks) to generate synthetic images from random noise. Focused on learning realistic visual features and understanding the dynamics between generator and discriminator models.",
    technologies: ["Python", "TensorFlow", "Keras", "GANs", "Deep Learning"],
    featured: true,
  },  
  // {
  //   title: "SIEM Migration Tool",
  //   description:
  //     "SaaS platform enabling seamless migration of alerts, dashboards, and visualizations across SIEM platforms. Developed alert migration module for Splunk to Elastic transfers.",
  //   technologies: ["FastAPI", "ReactJS", "RESTful APIs", "Splunk", "Elastic"],
  //   icon: <ArrowRightLeft className="w-6 h-6" />,
  //   impact: "Improved automation and data integrity in migration workflows",
  //   githubUrl: "https://github.com/parikhvedant2003",
  //   featured: true,
  // },
  // {
  //   title: "OCR & Translator Toolkit",
  //   description:
  //     "Versatile text processing tool integrating translation, image text extraction (OCR), and speech-to-text conversion into a unified interface for automation and accessibility use cases.",
  //   technologies: ["OpenCV", "Tesseract", "GoogleTrans", "Speech Recognition"],
  //   icon: <Languages className="w-6 h-6" />,
  //   impact: "Real-time translation, OCR, and speech-to-text capabilities",
  //   githubUrl: "https://github.com/parikhvedant2003",
  //   featured: false,
  // },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const startIndex = currentIndex * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Projects
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="prev-projects"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="next-projects"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Projects Grid */}
          {/* <div className="grid grid-cols-1 justify-items-center px-4"> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center px-4"> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {getCurrentProjects().map((project, index) => (
              <Card
                key={index}
                // className="project-card bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-300 w-[400px] h-[400px] flex flex-col"
                className="project-card bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* <div className="text-primary">{project.icon}</div> */}
                        <h3 className="font-sans font-semibold text-xl text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      {/* <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      </div> */}
                    </div>

                    <p className="font-body text-muted-foreground mb-4 leading-relaxed text-justify text-sm line-clamp-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          // className="bg-primary/10 text-primary hover:bg-primary/20"
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="text-sm text-muted-foreground flex items-center">
                    {project.icon}
                    <span className="ml-2">{project.impact}</span>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
