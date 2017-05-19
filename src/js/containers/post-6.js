import React, { Component } from 'react';
import '../../styles/containers/post.css';
import binarySearchRecursion from '../code-snippets/binary-search-recursion';
import binarySearchIteration from '../code-snippets/binary-search-iterative';

const Highlight = require('react-highlight');

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">Algorithms: Implementing Binary Search</h1>
        <p className="post-content post-date">20th May 2017</p>
        <p className="post-content">
          Binary Search is an algorithm which is used to find the position of a target value within a sorted array. 
          Below are two approaches to implementing a Binary Search (recursive & interative) with the runtime
          and memory complexities listed for each.
        </p>
        <p className="post-content">
          1. Recursive Approach
        </p>
        <ul className="post-content">
          <li>Runtime Complexity: O(logn)</li>
          <li>Memory Complexity: O(n)</li>
        </ul>
        <p className="post-content">
          The recursive approach has a runtime complexity O(logn) and a memory complexity of O(logn)
          - unless working in a language which support tail call optimisation.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {binarySearchRecursion}
          </Highlight>
        </div>
        <p className="post-content">
          2. Iterative Approach
        </p>
        <ul className="post-content">
          <li>Runtime Complexity: O(logn)</li>
          <li>Memory Complexity: O(1)</li>
        </ul>
        <p className="post-content">
          The iterative approach has the same runtime complexity of O(logn) as the recursive solution
          as the search space is halved on each iteration, however,
          it has a better memory complexity as it doesn't consume memory on the stack by adding a call 
          for each step of the recursion.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {binarySearchIteration}
          </Highlight>
        </div>
      </div>
    );
  }
}
