import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store/store';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';
import { GoogleOAuthProvider } from '@react-oauth/google';

const API_KEY = process.env.REACT_APP_GOOGLE_ID as string;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store} >
      <HistoryRouter history={browserHistory}>
        <GoogleOAuthProvider clientId={API_KEY}>
          <App />
        </GoogleOAuthProvider>
      </HistoryRouter>
    </Provider>
  </StrictMode>,
);
