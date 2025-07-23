import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";


const router=createBrowserRouter(
    [
        {path:"*",Component:Root}
    ]
)
export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}