import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layouts from "../Layouts/Layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },


])

export default router;