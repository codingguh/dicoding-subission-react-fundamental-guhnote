import cx from 'clsx';
import {  useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ActionToggle.module.css';
export function ActionToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return (<Group justify="center">
      {/* <ActionIcon  variant="default" size="xl" aria-label="Toggle color scheme">
        
      </ActionIcon> */}
      <div style={{cursor:'pointer'}} onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}/>
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5}/>
      </div>
    </Group>);
}
