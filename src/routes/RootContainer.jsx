import { Outlet } from "react-router-dom";
import { NotesProvider } from "../context/NotesProvider";
import { CustomModal } from "../components/ui/modals/CustomModal";
import { DoubleHeader } from "../components/layouts/header/Header";

export const RootContainer = () => {
  
  return (
 
      <NotesProvider>
        <DoubleHeader />
        
        <Outlet />
        <CustomModal />
      </NotesProvider>
  );
};
