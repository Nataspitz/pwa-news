import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';
import { BrowserRouter } from 'react-router-dom';

const updateSW = registerSW({
  onNeedRefresh() {
    const userConfirmed = window.confirm('Nova versão disponível. Deseja atualizar?');
    if (userConfirmed) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('PWA está pronto para uso offline');
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
