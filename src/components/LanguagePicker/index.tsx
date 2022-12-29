import i18n from '@/config/i18n';
import { LANGUAGES } from '@/constants';
import { ActionIcon, Image, Menu, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './LanguagePicker.scss';

const LanguagePicker = () => {
  const [selected, setSelected] = useState(LANGUAGES[0]);

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selected.lang);
  }, [selected]);

  const items = LANGUAGES.map((item) => (
    <Menu.Item
      className="language-item"
      icon={<Image src={item.img} alt={item.alt} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.lang}
    >
      <Text transform="capitalize">{`${item.name} - ${t(
        `LANGUAGE.${item.lang.toUpperCase()}`,
      )}`}</Text>
    </Menu.Item>
  ));

  return (
    <Menu radius="md" position="right-start" withArrow>
      <Menu.Target>
        <ActionIcon
          variant="default"
          size={30}
          sx={(theme) => ({
            transition: 'background-color 150ms ease',
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
            },
          })}
        >
          <Image src={selected.img} width={22} height={22} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguagePicker;
