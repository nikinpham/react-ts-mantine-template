import { Box, Group, useMantineColorScheme } from '@mantine/core';
import LanguagePicker from '../LanguagePicker';
import { ReactComponent as Logo } from '@/assets/icons/Logo_dark.svg';
import { ReactComponent as LogoDark } from '@/assets/icons/Logo.svg';
import { Link } from 'react-router-dom';
import { Path } from '@/config/path';
import ChangeAppTheme from './components/ChangeAppTheme';
const Brand = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Link to={Path.DASHBOARD}>{isDarkMode ? <LogoDark /> : <Logo />}</Link>
        <Group>
          <LanguagePicker />
          <ChangeAppTheme />
        </Group>
      </Group>
    </Box>
  );
};

export default Brand;
