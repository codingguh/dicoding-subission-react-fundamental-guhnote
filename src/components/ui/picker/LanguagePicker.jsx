import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './LanguagePicker.module.css';
import englishImage from './images/english.png';
import bahasaImage from './images/bahasa.png';
import  { useContext } from 'react'
import LocaleContext from '../../../context/LocaleContext'

const data = [
  { label: 'English', image: englishImage },
  { label: 'Bahasa', image: bahasaImage },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { locale, toggleLocale } = useContext(LocaleContext);

  const selectedLanguage = locale === 'en' ? data[0] : data[1];

  const handlerLanguage = (selectedItem) => {
    // Set the selected language based on the clicked item
    if (selectedItem.label !== selectedLanguage.label) {
      toggleLocale(); // Toggle locale only if a different language is selected
    }
  };
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} />}
      onClick={() => handlerLanguage(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <Image src={selectedLanguage.image} width={18} height={18} />
            <span className={classes.label}>{selectedLanguage.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}