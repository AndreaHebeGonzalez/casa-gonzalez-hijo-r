import { LocoScrollProvider, PreloaderProvider, ScreenProvider } from './context';
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

