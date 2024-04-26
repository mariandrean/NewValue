import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import NewsDetails from '../pages/NewsDetails.jsx'
import LayoutPrivate from '../layout/LayoutPrivate.jsx';
import Register from '../pages/Register.jsx';
import NewsForm from '../pages/NewsForm.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import { getNewsById } from '../services/newsServices.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/news/:id",
                element: <NewsDetails />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/register",
                element: <Register />
            },
            {
                path: "/dashboard/create",
                element: <NewsForm method="create" />,
            },
            {
                path: "/dashboard/update/:id",
                element: <NewsForm method="update" />,
                loader: ({params}) => getNewsById(params.id)
            },
        ]
    }
]);

export default router;






