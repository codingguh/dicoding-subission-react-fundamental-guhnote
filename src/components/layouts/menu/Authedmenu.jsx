import { Avatar, Group, Menu, rem, UnstyledButton, Text, useMantineColorScheme, useComputedColorScheme, } from '@mantine/core';
import { IconChevronDown, IconSwitchHorizontal } from '@tabler/icons-react';
import clsx from 'clsx';
import PropTypes from 'prop-types'; // Import PropTypes
import ButtonLogout from '../../ui/buttons/ButtonLogout';
import classes from './AuthedMenu.module.css';
import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { ActionToggle } from '../../ui/buttons/ActionToggle';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageToggle from '../../ui/buttons/LanguageToggle';
import useLanguage from '../../../hooks/useLanguage';

const Authedmenu = ({ userMenuOpened }) => {
    const { auth } = useContext(AuthContext);
    const { setColorScheme } = useMantineColorScheme();
    const navigate = useNavigate();
    const [isArchiveActive, setIsArchiveActive] = useState(true);
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    
    const user = {
        name: auth.name,
        email: auth.email,
        image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    };

    const { pathname } = useLocation();

    const handleArchiveClick = () => {
        if (!isArchiveActive) {
            setIsArchiveActive(true);
            navigate("/archives");
        } else {
            setIsArchiveActive(false);
            navigate("/");
        }
    };
    const text = useLanguage('app')
    return (
        <div className={classes.menuWrapper}>
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
                <Menu.Label>{text.setting}</Menu.Label>
                <Menu.Item
                    onClick={handleArchiveClick}
                    leftSection={
                        <IconSwitchHorizontal
                            style={{ width: rem(21), height: rem(21) }}
                            stroke={1.5}
                        />
                    }
                >
                <div onClick={handleArchiveClick}>
                {pathname !== '/archives' ? 'Archive List' : 'Active List'}
                </div>
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
                    {text.theme}
                </Menu.Item>
                <LanguageToggle />
                <Menu.Divider />
                <ButtonLogout />
            </Menu.Dropdown>
        </div>
    );
};

Authedmenu.propTypes = {
    userMenuOpened: PropTypes.bool.isRequired,
};

export default Authedmenu;
