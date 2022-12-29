import Logo from '@/assets/icons/Logo';
import { Box, Group, useMantineColorScheme } from '@mantine/core';
import LanguagePicker from '../LanguagePicker';
import ChangeAppTheme from './components/ChangeAppTheme';

const Brand = () => {
  const { colorScheme } = useMantineColorScheme();

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
        <Logo colorScheme={colorScheme} />
        <Group>
          <LanguagePicker />
          <ChangeAppTheme />
        </Group>
      </Group>
    </Box>
  );
};

export default Brand;
