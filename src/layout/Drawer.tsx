import React, { ReactNode } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import SideMenu from './Menu';
import Header from './Header';

/**
 * Renders the logo component.
 * @returns {ReactComponentElement<React.SVGProps<SVGSVGElement>>} The logo component.
 */

type SheetProps = {
  children: ReactNode;
};

const MySheet: React.FC<SheetProps> = ({ children }) => {
  const side = 'left';
  return (
    <Sheet key={side}>
      <Header>
        <SheetTrigger className="p-1 w-12 h-12 rounded-lg bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground">
          <Menu className="w-full h-full rounded-md backdrop-filter backdrop-blur-lg bg-opacity-light bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground dark:bg-opacity-light" />
        </SheetTrigger>
      </Header>
      <div className="flex flex-col items-center justify-center min-h-[90dvh] overflow-y-auto text-align-center">
        {children}
      </div>

      <SheetContent
        side={side}
        className="w-drawerWidth bg-background text-foreground dark:bg-background dark:bg-opacity-light dark:text-foreground"
      >
        <SheetHeader>
          <SheetTitle>
            <p className="text-4xl font-extrabold tracking-tight leading-none text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 transition-all lg:text-5xl">
              Find Me A Job
            </p>
          </SheetTitle>
          <SheetDescription>
            <div data-radix-scroll-area-viewport="" className="h-full w-full rounded-[inherit]">
              <div className="table w-full">
                <SideMenu />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MySheet;
