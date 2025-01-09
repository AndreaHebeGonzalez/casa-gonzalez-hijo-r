import { LocoScrollProvider, PreloaderProvider, ScreenProvider } from './context';
import { AppRouter } from './routes/AppRoutes';




export const App = () => {
  return (
    <LocoScrollProvider>
      <ScreenProvider>
        <PreloaderProvider>
          <AppRouter />
        </PreloaderProvider>
      </ScreenProvider>
    </LocoScrollProvider>
  );
};

