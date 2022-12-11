
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyProjectDetail from "../Pages/MyProject/MyProjectDetail";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project/:id',
                element: <MyProjectDetail></MyProjectDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
            }


        ]
    }
])

export default router;