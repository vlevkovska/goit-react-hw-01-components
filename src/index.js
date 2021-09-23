import React from 'react';
import ReactDOM from 'react-dom';

const description = React.createElement('div', {
  children: ['img', 'p', 'p', 'p'],
});
const stats = React.createElement('ul', { children: ['li', 'li', 'li'] });
const profile = React.createElement('div', { children: [description, stats] });
console.log(profile);

ReactDOM.render(profile, document.querySelector('#root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
