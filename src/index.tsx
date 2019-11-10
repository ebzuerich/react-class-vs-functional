import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import { englishTranslation } from './config/en';
import { BrowserRouter } from 'react-router-dom';

// Set up internationalization
if (!Intl.PluralRules) {
  require('intl-pluralrules');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en'); // Add locale data for en
  require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Add locale data for de
}



const createApp = () => {
  return (
    <IntlProvider locale='en' key={englishTranslation.language} messages={englishTranslation.messages}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  );
}

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
