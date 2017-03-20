import React, { Component } from 'react';
import '../../styles/containers/post.css';
const Highlight = require('react-highlight');
import memoizeSnippet from '../code-snippets/memoize';

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">List comprehension vs Generator Expressions</h1>
        <p className="post-content">
          The @memoize decorator creates a cache that stores the return values of a function and their corresponding arguments. 
        </p>
        <p className="post-content">
          This means that if a function is invoked with arguments that it has already seen before, it can simply look up the return value in cache rather than having to execute the function again.
        </p>
        <p className="post-content">
          This is analogous to a student being asked questions by a teacher. When faced with a question they haven't
          seen before they have to do the work to find the answer.
        </p>
        <p className="post-content">
          Once the answer has been found they can write it down so that if they get asked the same question again, 
          they can simply look it up without having to do any hard work.
        </p>
        <p className="post-content">
          A simple implementation of a memoize function can be seen in this code snippet below.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {memoizeSnippet}
          </Highlight>
        </div>
      </div>
    );
  }
}
