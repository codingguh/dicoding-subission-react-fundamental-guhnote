import { Drawer, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./DoubleHeader.module.css";
import TegNotes from "../logo/TegNotes";
import { useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import Authedmenu from "../menu/Authedmenu";
import { ActionToggle } from "../../ui/buttons/ActionToggle";
import { LanguagePicker } from "../../ui/picker/LanguagePicker";
import LanguageToggle from "../../ui/buttons/LanguageToggle";

export function DoubleHeader() {
  const { auth } = useContext(AuthContext);
  const [opened, { close }] = useDisclosure(false);

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <header className={classes.header}>
      <div
        className={classes.inner}
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <div style={{ display: "flex", width: "72%", alignItems: "center" }}>
          <TegNotes />
        </div>

        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          {auth ? (
            <Authedmenu userMenuOpened={userMenuOpened} />
          ) : (
            <div style={{ display: "flex", gap: "9px" }}>
              <ActionToggle />
              <LanguageToggle/>
            </div>
          )}
        </Menu>
        <Drawer
          size="xs"
          position="right"
          opened={opened}
          onClose={close}
          title={<TegNotes />}
        >
          {/* <Menu styles={{marginBottom:'33px'}}>
      {mainItemsVertical}
      </Menu> */}
        </Drawer>
        {/* <Burger
          opened={opened}
          onClick={open}
          className={classes.burger}
          size="sm"
          hiddenFrom="md"
        /> */}
      </div>
    </header>
  );
}
