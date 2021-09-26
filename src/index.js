import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<App />, document.querySelector('#root'));

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const social_profile = (

// );

// const description = <div></div>;
// const stats = <ul></ul>;
// const profile = (
//   <div>
//     {description}
//     {stats}
//   </div>
// );
// const description = React.createElement('div', {
//   children: ['img', 'p', 'p', 'p'],
// });
// const stats = React.createElement('ul', { children: ['li', 'li', 'li'] });
// const profile = React.createElement('div', { children: [description, stats] });
// console.log(profile);

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
