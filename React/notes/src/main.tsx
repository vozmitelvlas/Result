import {createRoot} from 'react-dom/client';
import {seedDatabase} from "./db";
import '@mantine/core/styles.css';
import App from "./App.tsx";
import './index.css';

await seedDatabase();
createRoot(document.getElementById('root')!).render(<App/>);
