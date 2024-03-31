import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { Toggle } from '@/components/ui/toggle';

type Theme = 'light' | 'dark' | 'system'; // Ensure this matches the type expected by setTheme

const themes = [
  { icon: <Sun size="32" />, name: 'light' },
  { icon: <Moon size="32" />, name: 'dark' },
  // { icon: <SunMoon size="32"/>, name: 'system'},
];

const ThemeSwitcher = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const handleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        {themes.map((themes, index) => (
          <div
            key={'theme-toggle-' + index}
            className={theme === themes.name ? 'opacity-100' : 'opacity-50'}
          >
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Toggle
                  key={'theme-toggle-' + index}
                  onClick={() => handleTheme(themes.name as Theme)}
                  style={{
                    opacity: theme === themes.name ? 1 : 0.5,
                    color:
                      theme === themes.name
                        ? 'var(--primary-foreground)'
                        : 'var(--tertiary-foreground)',
                    backgroundColor:
                      theme === themes.name
                        ? 'var(--primary-background)'
                        : 'var(--tertiary-foreground)',
                  }}
                  className="p-2 cursor-pointer"
                >
                  {themes.icon}
                  <span className="sr-only">{themes.name}</span>
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>
                <p>{themes.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default ThemeSwitcher;
