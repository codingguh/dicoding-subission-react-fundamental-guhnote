//import react router dom
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import { RootContainer } from "./RootContainer";
import NotFoundPage from "../pages/NotFoundPage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import RouteMiddleware from "./RouteMiddleware";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootContainer/>,
        children: [
            {
                path:'/',
                element:(<RouteMiddleware middleware="auth">
                    <Home />
                  </RouteMiddleware>)
            },
            {
                path:'archive',
                element:<ArchivePage/>
            },
            {
                path:'detail/:id',
                element:<DetailPage/>
            },
            {
                path: "/login",
                element: (
                  <RouteMiddleware middleware="public">
                    <LoginPage />
                  </RouteMiddleware>
                ),
              },
              {
                path: "/register",
                element: (
                  <RouteMiddleware middleware="public">
                    <RegisterPage/>
                  </RouteMiddleware>
                ),
              },
            {
                path: '*',
                element: <NotFoundPage />
              }
        ]
    },
    
])


// Export the RouterProvider
const Routes = () => <RouterProvider router={router} />;

export default Routes;