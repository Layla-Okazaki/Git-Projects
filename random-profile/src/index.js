import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// imports the export default from ./App.js
// the value of App is what you exported as default in ./App.js
import App from './App';
// imports the webVitals explained on line 14, 15
import reportWebVitals from './reportWebVitals';

// make the div with the root id in public/index.html to the react root witch is where the <App /> will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// reacts custom error messages that show on the website instead of the console
// only made to use in development state
reportWebVitals();
