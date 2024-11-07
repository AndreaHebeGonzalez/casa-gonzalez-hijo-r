import { ScreenProvider } from './context/ScreenProvider';
import { PreloaderProvider } from './context/PreloaderProvider';
import { AppRouter } from './routes/AppRoutes';

export const App = () => {
  return (
    <ScreenProvider>
      <PreloaderProvider>
        <AppRouter />
      </PreloaderProvider>
    </ScreenProvider>
  );
};

