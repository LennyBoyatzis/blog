import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom';
import App from './js/app';
import Post from './js/containers/post-3';
import Posts from './js/containers/posts';
import './styles/index.css';

ReactDOM.render((
  <Router>
    <App>
      <Route exact path="/" component={Posts}/>
      <Route path="/post/:postId" component={Post}/>
    </App>
  </Router>
), document.getElementById('root'))
