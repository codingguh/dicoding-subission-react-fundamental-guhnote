import { Group, Burger, Box , Drawer, Menu} from "@mantine/core";
import { ActionToggle } from "../../ui/buttons/ActionToggle";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import classes from "./DoubleHeader.module.css";
import { AddNewNoteForm } from "../forms/AddNewNoteForm";
import GuhNotes from "../logo/GuhNotes";

const mainLinks = [
  { link: "/", label: "Note List" },
  { link: "/archive", label: "Archive List" },
];

export function DoubleHeader() {
  const [opened, { open,close }] = useDisclosure(false);
  const location = useLocation();

  const mainItems = mainLinks.map((item) => (
    <Link
      to={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={location.pathname === item.link || undefined}
      style={{textDecoration:'none',}}
    >
      {item.label}
    </Link>
  ));

  const mainItemsVertical = mainLinks.map((item) => (
   <Menu.Item  key={item.label} style={{background:'transparent',padding:0,width:'100%',marginBottom:'21px',marginTop:'12px'}}>
      <Link
      to={item.link}
     
      className={classes.mainLink}
      data-active={location.pathname === item.link || undefined}
      style={{textDecoration:'none',}}
    >
      {item.label}
    </Link>
   </Menu.Item>
  
  ));

  return (
    <header className={classes.header}>
      <div
        className={classes.inner}
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <div style={{ display: "flex", width: "70%", alignItems: "center" }}>
          <GuhNotes/>

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
            <AddNewNoteForm />
          </Group>
        </Box>
        <Drawer size="xs" position="right" opened={opened} onClose={close} title={<GuhNotes/>}>
        
      <Menu styles={{marginBottom:'33px'}}>
      {mainItemsVertical}
      </Menu>
         
          <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:'21px'}}>
          <AddNewNoteForm />
          </div>
       
      </Drawer>
        <Burger
          opened={opened}
          onClick={open}
          className={classes.burger}
          size="sm"
          hiddenFrom="md"
        />
      </div>
    </header>
  );
}
