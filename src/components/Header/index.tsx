import { Header, HeaderProps } from '@mantine/core';
import React from 'react';

const CustomHeader = (props: HeaderProps) => {
  const { children, ...rest } = props;

  return (
    <Header
      p="md"
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      {...rest}
    >
      {children}
    </Header>
  );
};

export default CustomHeader;
