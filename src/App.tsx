import { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { useTheme, ThemeProvider } from '@/lib/ThemeProvider';
import loading from '@/lib/loading';
import { ErrorBoundary } from '@/lib/ErrorBoundary';
// import Background from '@/lib/background/Background';

const Routes = lazy(() => import('./Routes'));

function App() {
  const { isDarkMode } = useTheme();
  // Function to enter full screen
  const enterFullScreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(e => {
        console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`);
      });
    }
  };

  useEffect(() => {
    // Check if the app is running as a PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      // Automatically enter full screen on component mount for PWA
      enterFullScreen();
    }

    // Clean up
    return () => {
      // Exit full screen when component unmounts
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  console.log('isDarkMode', isDarkMode);
  return (
    <ErrorBoundary>
      <Suspense fallback={loading()}>
        {/* <Background /> */}
        <ThemeProvider defaultTheme={'dark'} storageKey={'vite-ui-theme'}>
          <Routes />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
