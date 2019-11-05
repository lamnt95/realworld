import React from "react";
import withSeo from "../src/hocs/withSeo";
import ProfileScreen from "../src/screens/Profile";

const Profile = () => <ProfileScreen />;

export default withSeo(Profile);
