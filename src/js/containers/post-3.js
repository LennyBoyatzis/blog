import React, { Component } from 'react';
import '../../styles/containers/post.css';
import { lcVsGeSnippet, memoryDifference } from '../code-snippets/lc-vs-ge';

const Highlight = require('react-highlight');

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">List comprehension vs Generator Expressions</h1>
        <p className="post-content">
          A List Comprehension executes immediately and creates a list in memory whereas a Generator Expression returns an object that
          can be iterated over.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {lcVsGeSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          Once the answer has been found they can write it down so that if they get asked the same question again, 
          they can simply look it up without having to do any hard work.
        </p>
        <p className="post-content">
          A simple implementation of a memoize function can be seen in this code snippet below.
        </p>
        <p className="post-content">
          The main feature of a generator is evaluating the elements on demand. This has the advantage of taking up much
          less memory. This can be verified using the getsizeof module.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {memoryDifference}
          </Highlight>
        </div>
      </div>
    );
  }
}
