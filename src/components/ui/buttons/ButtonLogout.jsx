import  { useContext } from 'react'
import { Menu, rem } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import AuthContext from '../../../context/AuthContext'
// import useLanguage from "../../../hooks/useLanguage";

const ButtonLogout = () => {
  const { auth } = useContext(AuthContext)
//   const text = useLanguage("app");

  const handleLogout = () => {
    // if (confirm(text.msg.confirm)) {
      localStorage.removeItem("accessToken");
      window.location = "/";
    // }
  };

  return (
   <>
   {
 auth?( <Menu.Item
    onClick={handleLogout}
    color="red"
    leftSection={
      <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    }
  >
    <b>Logout</b>
  </Menu.Item>):''  
}
   </>
  );
};

export default ButtonLogout;
