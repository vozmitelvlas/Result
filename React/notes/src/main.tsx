import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router"
import '@mantine/core/styles.css'
import {router} from "./router"
import './index.css'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
