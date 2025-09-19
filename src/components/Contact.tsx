import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life.
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always interested in discussing new opportunities, 
                collaborating on exciting projects, or simply 
                connecting with fellow developers. Feel free to reach 
                out!
              </p>
              
              <div className="space-y-4">
                {/* Email Card */}
                <a 
                  href="mailto:aarya.mehta.2506@gmail.com"
                  className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Email</p>
                    <p className="text-primary">aarya.mehta.2506@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a 
                  href="https://in.linkedin.com/in/aaryamehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-primary">aaryamehta</p>
                  </div>
                </a>

                {/* GitHub Card */}
                <a 
                  href="https://github.com/AaryaMehta2506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">GitHub</p>
                    <p className="text-primary">AaryaMehta2506</p>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+918160677852"
                  className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Phone</p>
                    <p className="text-primary">+91 8160677852</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Send me a message</h3>
            
            <form className="space-y-4">
              {/* <div className="grid grid-cols-2 gap-4"> */}
              <div className="gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="firstName" placeholder="Enter Name" />
                </div>
                {/* <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div> */}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter Email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Enter Subject" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Mention details"
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;