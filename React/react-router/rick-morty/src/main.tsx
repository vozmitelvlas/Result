    import {createRoot} from 'react-dom/client';
    import {RouterProvider} from "react-router/dom";
    import router from "./router.tsx";
    import './index.css';

    createRoot(document.getElementById('root')!).render(
        <RouterProvider router={router}/>
    );

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('registered'))
            .catch((e) => console.log(e));
    }
