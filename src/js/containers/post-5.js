import React, { Component } from 'react';
import '../../styles/containers/post.css';
import queueSnippet from '../code-snippets/queue';

const Highlight = require('react-highlight');

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">Data Structures: Implementing a Queue</h1>
        <p className="post-content post-date">10th May 2017</p>
        <p className="post-content">
          Queue's are a data structure which implement a first in first out (FIFO) policy. This means that the item
          that was first to join the queue is going to be the first item to be removed from the queue.
        </p>
        <p className="post-content">
          In terms of efficiency, we will be using the pop() operation to dequeue an item which has an efficiency of
          O(1) and the insert() operation to enqueue an item which has an efficiency of O(N) - as all elements in the array
          need to be repositioned in memory.
        </p>
        <p className="post-content">
          Although there are many ways to implement a Queue, the example below creates new class and implements 
          the queue operations as methods on this class. To further simplify things, we will use a list as our queues
          storage mechanism. Furthermore, we are using the end of the list as the front of the queue and will be using 
          pop() to dequeue and item and insert() to add an item to the back of the queue. See below
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {queueSnippet}
          </Highlight>
        </div>
      </div>
    );
  }
}
