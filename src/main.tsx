import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/Body'; // Changed from './components/App' to './components/Body'
import "./index.css";
import appStore from './utils/appStore';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={appStore}>
        <App />
      </Provider>
    </StrictMode>
  );
}