import Logo from '@/assets/icons/Logo';
import { Anchor, createStyles, Group, Navbar, NavLink, useMantineColorScheme } from '@mantine/core';
import LanguagePicker from '../LanguagePicker';
import ChangeAppTheme from './components/ChangeAppTheme';
import { MAIN_LINK } from '@/constants';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  mainLink: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: '12px',
    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
    opacity: 0.6,
  },

  mainLinkActive: {
    color: theme.colors[theme.primaryColor][5],
    padding: '12px',
    opacity: 1,
  },
}));
const Brand = () => {
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  return (
    <Group position="apart" style={{ width: '100%' }}>
      <Group>
        <Logo colorScheme={colorScheme} />
        <Group>
          {MAIN_LINK.map((item, index) => (
            <Anchor<'a'>
              href={item.path}
              key={item.label}
              className={cx(classes.mainLink, {
                [classes.mainLinkActive]: index === active,
              })}
              onClick={(event) => {
                event.preventDefault();
                setActive(index);
                navigate(item.path);
              }}
            >
              {t(item.label)}
            </Anchor>
          ))}
        </Group>
      </Group>
      <Group>
        <LanguagePicker />
        <ChangeAppTheme />
      </Group>
    </Group>
  );
};

export default Brand;
