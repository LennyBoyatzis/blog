import React, { Component } from 'react';
import '../../styles/containers/post.css';
import { lcVsGeSnippet, memoryDifference } from '../code-snippets/lc-vs-ge';

const Highlight = require('react-highlight');

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">List Comprehension vs Generator Expressions</h1>
        <p className="post-content">
          Both list comprehensions and generator expressions look very similar in their syntax. 
          The subtle difference being [...] vs (...).
          If you print both you’ll see that what is being created under the hood is actually very different. 
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {lcVsGeSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          What you can see above is that a list comprehension executes immediately and creates a list in memory, 
          whereas a generator expression returns a special object that can be iterated over.
        </p>
        <p className="post-content">
          Even though list comprehension consumes more memory, it is preferable to use when list specific operations such as indexing or slicing 
          will be required. These operations are not available on generator expressions. Additionally, if a sequence needs
          to be iterated over multiple times it may be more appropriate to use list comprehension as iterating over a list is quicker than iterating over
          a generator object.
        </p>
        <p className="post-content">
          Using the getsizeof module we can see that as the sequence increases from 1000 items to 5000 items, unlike the list comprehension,
          there is no change in the size the generator expression.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {memoryDifference}
          </Highlight>
        </div>
        <p className="post-content">
          Generators are helpful for situations where you are working with large sequences of data that
          you may not want to store in memory but instead generate on the fly. 
        </p>
      </div>
    );
  }
}
