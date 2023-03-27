import React from 'react';

import { AppShell, useMantineTheme } from '@mantine/core';
import './PageLayout.scss';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Brand from '@/components/Brand';

const PageLayout = () => {
  const theme = useMantineTheme();

  const header = () => {
    return (
      <Header height={72}>
        <Brand />
      </Header>
    );
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={header()}
    >
      <Outlet />
    </AppShell>
  );
};

export default PageLayout;
