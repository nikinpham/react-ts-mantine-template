import { Path } from '@/config/path';
import { Navbar, NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Brand } from '../Brand';

const CustomNavBar = () => {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section>
        <NavLink
          component={Link}
          to={Path.DASHBOARD}
          label="Dashboard"
          active={location.pathname === Path.DASHBOARD}
        />
      </Navbar.Section>
      <Navbar.Section grow>Grow section</Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  );
};

export default CustomNavBar;
