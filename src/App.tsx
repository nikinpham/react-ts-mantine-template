import { Suspense, useEffect, useId } from 'react';
// Mantine
import { ColorScheme, ColorSchemeProvider, LoadingOverlay, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
// Router
import { Route, Routes } from 'react-router-dom';
// Config
import 'dayjs/locale/ko';
import './App.scss';
import PageLayout from './components/PageLayout';
import { mantineTheme } from './config/mantineProvider';
import routesConfig from './config/routesConfig';
import { defaultLanguage } from './config/system';
import { ModalsProvider } from '@mantine/modals';
import i18n from './config/i18n';

const App = () => {
  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
  }, []);
  const uID = useId();

  const defaultColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: defaultColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={mantineTheme({
          datesLocale: localStorage.getItem('i18nextLng') || defaultLanguage,
          colorScheme,
        })}
      >
        <ModalsProvider>
          <NotificationsProvider>
            <Suspense fallback={<LoadingOverlay visible />}>
              <Routes>
                <Route path="/" element={<PageLayout />}>
                  {routesConfig.map((route, index) => (
                    <Route
                      key={`${uID}-${index}`}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
                </Route>
              </Routes>
            </Suspense>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
