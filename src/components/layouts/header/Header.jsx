// import { useState } from "react";
import { Group, Burger, Box } from "@mantine/core";
import { ActionToggle } from "../../ui/buttons/ActionToggle";
import { useDisclosure } from "@mantine/hooks";
import { IconLicense } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import classes from "./DoubleHeader.module.css";
import { AddNewNoteButton } from "../../ui/buttons/AddNewNoteButton";

const mainLinks = [
  { link: "/", label: "Note List" },
  { link: "/archive", label: "Archive List" },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const mainItems = mainLinks.map((item) => (
    <Link
      to={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={location.pathname === item.link || undefined}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div
        className={classes.inner}
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <div style={{ display: "flex", width: "70%", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "25px",
              paddingLeft: "5px",
            }}
          >
            <IconLicense size={45} color="rgb(51, 154, 240)" stroke={2} />

            <span
              style={{
                marginLeft: "3px",
                fontWeight: "bolder",
                fontSize: 19,
                color: "rgb(51, 154, 240)",
              }}
            >
              Guhnotes
            </span>
          </div>

          <div className="header-right">
            <ActionToggle />
          </div>
        </div>

        <Box
          className={classes.links}
          visibleFrom="md"
          style={{ width: "350px" }}
        >
          <Group gap={0} justify="space-between">
            {mainItems}
            <AddNewNoteButton />
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="md"
        />
      </div>
    </header>
  );
}
