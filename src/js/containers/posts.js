import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import articleContent from '../../data/articles.js'
import '../../styles/containers/posts.css'
import '../../styles/components/content.css'

export default class Posts extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="posts-container">
          {
            articleContent.map(article =>
              <Link className="content-link" key={article.id} to={`/post/post-${article.id}`}>
                <div className="content-article">
                  <h2>{article.title}</h2>
                  <hr className="content-divider"/>
                  <div className="content-content">
                    <p>{article.content}</p>
                    <div className="content-clickables">
                      <span>{article.dateCreated}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}
