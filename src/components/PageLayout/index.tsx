import i18n from '@/config/i18n';
import { defaultLanguage } from '@/config/system';
import { AppShell, Footer, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomNavBar from '../NavBar';
import './PageLayout.scss';

const PageLayout = () => {
  const location = useLocation();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [toggleLang, setToggleLang] = useState(
    localStorage.getItem('i18nextLng') || defaultLanguage,
  );

  useEffect(() => {
    i18n.changeLanguage(toggleLang);
  }, [toggleLang]);

  useEffect(() => {
    if (i18n.resolvedLanguage === defaultLanguage && toggleLang !== defaultLanguage) {
      setToggleLang(defaultLanguage);
    }
  }, []);

  const theme = useMantineTheme();
  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbar={<CustomNavBar />}
      >
        <Outlet />
      </AppShell>
    </>
  );
};

export default PageLayout;
