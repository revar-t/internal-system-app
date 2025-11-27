import AppProvider from './providers/app-provider';
import AppRoutes from './routes/app-routes';

function App() {
  // TODO: No Operation
  // const noop = () => {};
  // console.warn = noop;

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
