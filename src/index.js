import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './js/app';
import Post from './js/containers/post-3';
import Posts from './js/containers/posts';
import './styles/index.css';

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Posts}/>
      <Route path="/post/:postId" component={Post}/>
    </Route>
  </Router>
), document.getElementById('root'))
