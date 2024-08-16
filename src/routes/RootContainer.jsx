import { Outlet } from "react-router-dom";
import { NotesProvider } from "../context/NotesProvider";
import { DoubleHeader } from "../components/layouts/header/Header";

export const RootContainer = () => {
  
  return (
 
      <NotesProvider>
        <DoubleHeader />
        <Outlet />
      </NotesProvider>
  );
};
