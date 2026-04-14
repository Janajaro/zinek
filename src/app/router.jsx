import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Info } from "../pages/Info/Info";
import { List } from "../pages/List/List";
import { Error } from "../pages/Error/Error";

export const router = createBrowserRouter([
{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "info", element: <Info /> },
        { path: "list", element: <List /> },
        { path: "*", element: <Error /> },
    ],
},
]); 