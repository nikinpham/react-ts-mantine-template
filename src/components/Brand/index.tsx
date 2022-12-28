import { Group, ActionIcon, useMantineColorScheme, Box } from '@mantine/core';
import Logo from '@/assets/icons/Logo';
import { Moon, SunHigh } from 'tabler-icons-react';

export function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? (
            <SunHigh size={16} strokeWidth={2} />
          ) : (
            <Moon size={16} strokeWidth={2} />
          )}
        </ActionIcon>
      </Group>
    </Box>
  );
}
