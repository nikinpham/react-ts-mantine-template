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
import useGlobalStore from './stores';
import { SocketEvents } from './config/httpConfig/socket';
import { ISocketEvent } from './interfaces/interfaceTLSCommunications';
import { getListDevices } from './services/tlsCommunicationsAPI';

const App = () => {
  const uID = useId();
  const defaultColorScheme = useColorScheme();
  const { socket, communicationEvents, setListDevices, setCommunicationEvents } = useGlobalStore(
    (state) => ({
      socket: state.socket,
      communicationEvents: state.communicationEvents,
      setListDevices: state.setListDevices,
      setCommunicationEvents: state.setCommunicationEvents,
    }),
  );

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: defaultColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
  }, []);

  useEffect(() => {
    getListDevices().subscribe({
      next: ({ data }) => {
        console.log(data);
        setListDevices(data);
      },
    });
  }, []);

  useEffect(() => {
    socket.on('connect_error', () => {
      socket.disconnect();
    });

    return () => {
      socket.off('connect_error');
    };
  }, []);

  const createNewEvent = (event: ISocketEvent) => {
    const newEvent = communicationEvents.concat(event);
    setCommunicationEvents(newEvent);
  };

  const updateEvent = (event: ISocketEvent) => {
    const eventList = communicationEvents;
    if (event.status === -1) {
      const clearEvent = eventList.filter((item) => {
        return item.id !== event.id;
      });
      setCommunicationEvents(clearEvent);
    } else {
      const updatedData = eventList.map((item) =>
        item.id === event.id ? { ...item, status: event.status } : item,
      );
      setCommunicationEvents(updatedData);
    }
  };

  useEffect(() => {
    socket.on(SocketEvents.NEW_COMMUNICATION, (event: ISocketEvent) => {
      createNewEvent(event);
    });
    socket.on(SocketEvents.UPDATE_COMMUNICATION, (event: ISocketEvent) => {
      updateEvent(event);
    });

    return () => {
      socket.off(SocketEvents.NEW_COMMUNICATION);
      socket.off(SocketEvents.UPDATE_COMMUNICATION);
    };
  }, [communicationEvents]);

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
