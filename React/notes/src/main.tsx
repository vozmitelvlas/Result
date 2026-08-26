import {createRoot} from 'react-dom/client';
import {seedDatabase} from "./db";
import App from "./App.tsx";
import "easymde/dist/easymde.min.css";
import '@mantine/core/styles.css';
import './index.css';

await seedDatabase();
createRoot(document.getElementById('root')!).render(<App/>);
