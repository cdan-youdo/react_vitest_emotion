import './index.css';
import { createRoot } from 'react-dom/client';
import AppContainer from './containers/AppContainer';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<AppContainer/>);