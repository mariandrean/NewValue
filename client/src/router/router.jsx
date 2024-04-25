import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import LayoutPrivate from '../layout/LayoutPrivate';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: getData
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/newsdetails",
                element: <NewsDetails />
            }
        ],
    },
    {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "create",
                element: <NewsForm />,
            },
            {
                path: "newsdetails/:id",
                element: <NewsDetails />,
            },
            {
                path: "update/:id",
                element: <NewsForm />,
            },
        ]
    }
]);
export default router;






