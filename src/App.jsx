import { ScreenProvider } from './context/ScreenProvider';
import { PreloaderProvider } from './context/PreloaderProvider';
import { LocoScrollProvider } from './context/LocoScrollProvider';
import { AppRouter } from './routes/AppRoutes';


export const App = () => {
  return (
    <ScreenProvider>
      <PreloaderProvider>
        <LocoScrollProvider>
          <AppRouter />
        </LocoScrollProvider>
      </PreloaderProvider>
    </ScreenProvider>
  );
};

