import React from 'react';
import { DataProvider } from './Context/DataProvider';
import { SelectContactProvider } from './Context/SelectContactProvider';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './GeneralComponent/App';
import reportWebVitals from './reportWebVitals';
import store from './Redux-store/store';
import { Provider } from 'react-redux';
import { TypingIndicatorProvider } from './Context/TypeIndicator';
import { MenuStatusProvider } from './Context/MenuStatusProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DataProvider>
      <SelectContactProvider>
        <TypingIndicatorProvider>
          <MenuStatusProvider>
            <App />
          </MenuStatusProvider>
        </TypingIndicatorProvider>
      </SelectContactProvider>
    </DataProvider>
  </Provider>
);

reportWebVitals();
