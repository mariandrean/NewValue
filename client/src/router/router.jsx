import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import NewsDetails from '../pages/NewsDetails.jsx'
import LayoutPrivate from '../layout/LayoutPrivate.jsx';
import Register from '../pages/Register.jsx';
import NewsForm from '../pages/NewsForm.jsx';
import Dashboard from '../pages/Dashboard.jsx';



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
                path: "register",
                element: <Register />
            },
            {
                path: "create",
                element: <NewsForm />,
            },
            {
                path: "update/:id",
                element: <NewsForm />,
            },
        ]
    }
]);
export default router;






