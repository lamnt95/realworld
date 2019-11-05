import React from "react";
import Bannner from "../components/Banner";
import FeedCard from "../components/FeedCard";
import Tab from "../components/Tab";
import Tag from "../components/Tag";

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
