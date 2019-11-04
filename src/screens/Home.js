import React from "react";

const Bannner = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
);

const Tab = () => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <a className="nav-link disabled" href="">
          Your Feed
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="">
          Global Feed
        </a>
      </li>
    </ul>
  </div>
);

const Tag = () => (
  <div className="sidebar">
    <p>Popular Tags</p>

    <div className="tag-list">
      <a href="" className="tag-pill tag-default">
        programming
      </a>
      <a href="" className="tag-pill tag-default">
        javascript
      </a>
      <a href="" className="tag-pill tag-default">
        emberjs
      </a>
      <a href="" className="tag-pill tag-default">
        angularjs
      </a>
      <a href="" className="tag-pill tag-default">
        react
      </a>
      <a href="" className="tag-pill tag-default">
        mean
      </a>
      <a href="" className="tag-pill tag-default">
        node
      </a>
      <a href="" className="tag-pill tag-default">
        rails
      </a>
    </div>
  </div>
);

const FeedCard = () => (
  <div className="article-preview">
    <div className="article-meta">
      <a href="profile.html">
        <img src="http://i.imgur.com/Qr71crq.jpg" />
      </a>
      <div className="info">
        <a href="" className="author">
          Eric Simons
        </a>
        <span className="date">January 20th</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> 29
      </button>
    </div>
    <a href="" className="preview-link">
      <h1>How to build webapps that scale</h1>
      <p>This is the description for the post.</p>
      <span>Read more...</span>
    </a>
  </div>
);

const Home = () => (
  <div className="home-page">
    <Bannner />

    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <Tab />
          <FeedCard />
        </div>
        <div className="col-md-3">
          <Tag />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
