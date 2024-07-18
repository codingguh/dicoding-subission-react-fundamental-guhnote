//import react router dom
import {  createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RootContainer } from "./RootContainer";
import NotFoundPage from "../pages/NotFoundPage";
import ArchivePage from "../pages/ArchivePage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootContainer/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'archive',
                element:<ArchivePage/>
            },
            {
                path: '*',
                element: <NotFoundPage />
              }
        ]
    },
    
])