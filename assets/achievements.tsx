import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Code,
  Zap,
} from "lucide-react";
import { SiPython } from "react-icons/si";
import { useState } from "react";

const achievements = [
  {
    title: "Placement Coordinator",
    subtitle: "2024 & 2025 - Computer Science & Engineering, Navrachana University",
    icon: <Trophy className="w-8 h-8" />,
    category: "Academic",
  },
  {
    title: "Machine Learning Foundations",
    subtitle: "Amazon Web Services - 2024",
    icon: <Award className="w-8 h-8" />,
    category: "Certificate",
  },
  {
    title: "Natural Language Processing",
    subtitle: "Amazon Web Services - 2024",
    icon: <Award className="w-8 h-8" />,
    category: "Certificate",
  },
  {
    title: "Power BI",
    subtitle: "Code Unnati Innovation - 2024",
    icon: <Award className="w-8 h-8" />,
    category: "Certificate",
  },
  {
    title: "Python, Data Science, Data Analyst, Artificial Intelligence",
    subtitle: "Navrachana University",
    icon: <Award className="w-8 h-8" />,
    category: "Academic",
  },
  {
    title: "Data Visualization",
    subtitle: "Kaggle - 2024",
    icon: <Award className="w-8 h-8" />,
    category: "Certificate",
  },
];

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(achievements.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentAchievements = () => {
    const startIndex = currentIndex * itemsPerPage;
    return achievements.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Achievements & Certifications
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="prev-achievements"
            aria-label="Previous achievements"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="next-achievements"
            aria-label="Next achievements"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Achievements Grid */}
          {/* <div className="grid grid-cols-1 justify-items-center px-4"> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {getCurrentAchievements().map((achievement, index) => (
              <Card
                key={index}
                // className="bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-300 w-[250px] h-[250px] flex flex-col"
                className="bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                data-testid={`achievement-card-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mx-auto w-fit">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
