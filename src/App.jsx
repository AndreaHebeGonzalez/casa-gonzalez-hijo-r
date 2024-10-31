import { ScreenProvider } from './context/ScreenProvider';
import { AppRouter } from './routes/AppRoutes';

export const App = () => {
  return (
    <ScreenProvider>
      <AppRouter />
    </ScreenProvider>
  );
};

