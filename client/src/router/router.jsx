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
                path: "/news/:id",
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
                path: "/register",
                element: <Register />
            },
            {
                path: "/create",
                element: <NewsForm />,
            },
            {
                path: "/update/:id",
                element: <NewsForm />,
            },
        ]
    }
]);
export default router;






