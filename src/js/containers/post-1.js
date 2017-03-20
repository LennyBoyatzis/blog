import React, { Component } from 'react';
import '../../styles/containers/post.css';
const Highlight = require('react-highlight');
import rlCodeSnippet from '../code-snippets/if-name-main';

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">What does if __name__ == "__main__" do?</h1>
        <p className="post-content">
          The conditional check __name__ == "__main__" exists so that Python files can act as both reusable modules or standalone programs.
        </p>
        <p className="post-content">
          When the python interpreter runs a file, it sets a special variable called __name__ to "__main__", if __name__ == "__main__" evaluates to True, then it runs the code below.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {rlCodeSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          This comes in very handy if you only want this code to execute when the module is run as a program and not when someone imports the module. An example of this is when testing or debugging a module.
        </p>
      </div>
    );
  }
}
