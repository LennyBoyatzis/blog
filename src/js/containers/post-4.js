import React, { Component } from 'react';
import '../../styles/containers/post.css';
import stackSnippet from '../code-snippets/stack';

const Highlight = require('react-highlight');

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">Data Structures: Implementing a Stack</h1>
        <p className="post-content post-date">2nd May 2017</p>
        <p className="post-content">
          Stacks are a common elementary data structure which implement a Last In First Out (LIFO) policy.
          This means that last item inserted into a stack will be the first item to be removed.
        </p>
        <p className="post-content">
          Sounds similar to list? Well, it is. A stacks interface is similar to a list's, however, stacks only allow
          for the push/append and pop operations (i.e. only adding and removing from the end of a list). In terms of efficient, unlike a list,
          a stack does not offer constant-time (O(1) time) access to the ith item, however, it does allow constant time adds
          and removes (as no shifting of elements is required).
        </p>
        <p className="post-content">
          Although there are many ways to implement a Stack, we will be creating a new class and implementing 
          the stack operations as methods on this class. To further simplify things, we will use a list as our stacks
          storage mechanism. Now without further or do,
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {stackSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          Looking at the above implementation, stacks are pretty simple data structures which are 
          particularly useful in recursive algorithms where temporary data can be stored as you recurse
          but then removed when you backtrack. A common example of this is a call stack.
        </p>
      </div>
    );
  }
}
