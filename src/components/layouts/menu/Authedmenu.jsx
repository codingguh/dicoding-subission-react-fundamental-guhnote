import { Avatar, Group, Menu, rem, UnstyledButton,Text,useMantineColorScheme, useComputedColorScheme, } from '@mantine/core'
import { IconChevronDown, IconLanguage, IconSwitchHorizontal } from '@tabler/icons-react'
import clsx from 'clsx';
import PropTypes from 'prop-types'; // Import PropTypes
import ButtonLogout from '../../ui/buttons/ButtonLogout';
import classes from './AuthedMenu.module.css';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { ActionToggle } from '../../ui/buttons/ActionToggle';


const Authedmenu = ({userMenuOpened}) => {
    const { auth } = useContext(AuthContext);
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const user = {
        name: auth.name,
        email: auth.email,
        image:
          "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
      };

      
  return (
    <>
          
    <Menu.Target>
      <UnstyledButton
        className={clsx(classes.user, {
          [classes.userActive]: userMenuOpened,
        })}
      >
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            size={20}
          />
          <Text fw={500} size="sm" lh={1} mr={3}>
            {user.name}
          </Text>
          <IconChevronDown
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        </Group>
      </UnstyledButton>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Label>Settings</Menu.Label>

      <Menu.Item
        leftSection={
          <IconSwitchHorizontal
            style={{ width: rem(21), height: rem(21) }}
            stroke={1.5}
          />
        }
      >
        Archive List
      </Menu.Item>
      <Menu.Item
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        leftSection={
          <ActionToggle
            style={{ width: rem(21), height: rem(21) }}
            stroke={1.5}
          />
        }
      >
        Tema
      </Menu.Item>
      <Menu.Item
        leftSection={
          <IconLanguage
            style={{ width: rem(21), height: rem(21) }}
            stroke={1.5}
          />
        }
      >
        Bahasa
      </Menu.Item>

      <Menu.Divider />

      <Menu.Label>Danger zone</Menu.Label>
      
      <ButtonLogout/>
    </Menu.Dropdown></>
  )
}

Authedmenu.propTypes = {
    userMenuOpened: PropTypes.bool.isRequired, // Validate that userMenuOpened is a boolean and is required
  };

export default Authedmenu
