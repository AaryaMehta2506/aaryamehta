// import { SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";

// const socialLinks = [
//   {
//     icon: <SiLinkedin className="w-5 h-5" />,
//     href: "https://in.linkedin.com/in/aaryamehta",
//     label: "LinkedIn",
//   },
//   {
//     icon: <SiGithub className="w-5 h-5" />,
//     href: "https://github.com/AaryaMehta2506",
//     label: "GitHub",
//   },
// ];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-body text-muted-foreground">
              © Aarya Mehta. All rights reserved.
            </p>
          </div>
          {/* <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.label}
                data-testid={`social-link-${link.label.toLowerCase()}`}
              >
                {link.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
