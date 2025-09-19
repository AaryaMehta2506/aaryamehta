const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Aarya Mehta. All rights reserved.
            </p>
          </div>
          
          {/* <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div> */}
        </div>
        
        {/* <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;