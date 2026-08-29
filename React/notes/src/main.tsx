import {createRoot} from 'react-dom/client';
import App from "./App.tsx";
import "font-awesome/css/font-awesome.min.css";
import "easymde/dist/easymde.min.css";
import '@mantine/core/styles.css';
import './index.css';

// await seedDatabase();
createRoot(document.getElementById('root')!).render(<App/>);
