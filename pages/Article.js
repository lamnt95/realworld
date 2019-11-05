import React from "react";
import withSeo from "../src/hocs/withSeo";
import ArticleScreen from "../src/screens/Article";

const Article = () => <ArticleScreen />;

export default withSeo(Article);
