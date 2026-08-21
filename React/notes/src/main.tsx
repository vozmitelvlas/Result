import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router";
import '@mantine/core/styles.css';
import {router} from "./router";
import './index.css';
import {seedDatabase} from "./db";
import {AuthProvider} from "./providers";

await seedDatabase();
createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
);
