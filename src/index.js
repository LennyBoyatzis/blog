import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route, 
} from 'react-router-dom';
import App from './js/app';
import Post6 from './js/containers/post-6';
import Post5 from './js/containers/post-5';
import Post4 from './js/containers/post-4';
import Post3 from './js/containers/post-3';
import Post2 from './js/containers/post-2';
import Post1 from './js/containers/post-1';
import Posts from './js/containers/posts';
import './styles/index.css';

ReactDOM.render((
  <Router>
    <App>
      <Route exact path="/" component={Posts}/>
      <Route path="/post/post-1" component={Post1}/>
      <Route path="/post/post-2" component={Post2}/>
      <Route path="/post/post-3" component={Post3}/>
      <Route path="/post/post-4" component={Post4}/>
      <Route path="/post/post-5" component={Post5}/>
      <Route path="/post/post-6" component={Post6}/>
    </App>
  </Router>
), document.getElementById('root'))
