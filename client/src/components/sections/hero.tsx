import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Mail, Code2, Eye } from "lucide-react";
import AIMLAvatar from '@/assets/AIML-avatar.png';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = import.meta.env.BASE_URL + "Resume - Aarya Mehta.pdf";
    link.download = "Resume - Aarya Mehta.pdf";
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              {/* <em>Hi, I'm <span className="text-primary">Aarya Mehta</span></em> */}
              Hi, I'm <span className="text-primary">Aarya Mehta</span>
            </h1>
            <h2 className="font-sans font-medium text-xl sm:text-2xl text-foreground mb-6">
              Data Operation Analyst at NielsenIQ | AI/ML Engineer | Python Developer
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl text-justify">
            I’m a Computer Science & Engineering graduate working at NielsenIQ India Pvt. Ltd. as part of the Data Operations & 
            Analytics (DOA) team. My role focuses on data validation, preprocessing, and outbound management within the Retail 
            Management System (RMS) — ensuring data accuracy, consistency, and reliability that power high-quality analytics and 
            insights. With a strong foundation in AI/ML, Data Science, and Python development, I’m passionate about combining 
            data integrity, intelligent automation, and analytics to create impactful, efficient, and reliable data-driven solutions.
            {/* I'm a Computer Science & Engineering student building scalable Python solutions with expertise in AI/ML, 
            Data Science, Data Analyst, and Backend Development. Skilled in creating innovative applications that combine 
            intelligent automation with real-world impact. */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="px-8 py-3 font-medium"
                    data-testid="button-view-resume"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0 flex flex-col">
                  <DialogHeader className="px-6 py-4 border-b">
                    <DialogTitle>Aarya Mehta - Resume</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 p-4">
                    <iframe
                      src={import.meta.env.BASE_URL + "Resume - Aarya Mehta.pdf"}
                      className="w-full h-full border-0 rounded-md"
                      title="Aarya Mehta Resume"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                onClick={scrollToContact}
                className="px-8 py-3 font-medium"
                data-testid="button-contact-me"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary/10 to-accent rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-card rounded-full border border-border flex items-center justify-center shadow-lg">
                {/* <Code2 className="w-24 h-24 text-primary" /> */}
                <img 
                    src={AIMLAvatar} 
                    alt="AI Python Developer" 
                    className="w-full h-full object-cover rounded-full"
                  />
              </div>
            </div>
            {/* <div className="absolute inset-0 hero-gradient rounded-full opacity-20 animate-pulse"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
