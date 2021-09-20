import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';
import './sass/partials/_navbar.scss';
import './sass/partials/_carousel.scss';
import './sass/partials/_wedoYAYthings.scss'
import './sass/partials/_footer.scss';
import './sass/partials/_cards.scss';
import './sass/partials/_contact.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
