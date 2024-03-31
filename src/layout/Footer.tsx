import React, { ReactElement } from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="footer w-[100vw] min-h-[5dvh] items-center  bg-transparent dark:bg-transparent text-secondary-foreground dark:text-secondary-foreground rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-heavy">
      <div className="bg-transparent">
        <div className="flex flex-col justify-between p-2 border-t border-gray-800 sm:flex-row">
          <div className="flex-initial text-sm text-gray-500">
            © CopyLeft 2024 Tombombadilom. All rights allowed.
          </div>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://github.com/tombombadilom/helia-ipfs-cms-template"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <Github className="bg-primary primary-foreground hover:secondary-foreground" />
            </a>
            <a
              href="https://twitter.com/Tarlinan"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <Twitter className="bg-primary primary-foreground hover:secondary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
