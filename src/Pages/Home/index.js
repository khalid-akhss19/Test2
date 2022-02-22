import React from "react";
import { Box, Typography } from "@material-ui/core";
import Footer from "../../Components/Footer";
import MapCardOne from "../../Components/MapCardOne";
import WrappperMargin from "../../Components/WrappperMargin";
import CardOne from "../../Components/CardOne";
import CardTwo from "../../Components/CardTwo";
import MarketPlace from "../../Components/MarketPlace";
import Recent from "../../Components/Recent";
import RecentVerified from "../../Components/RecentVerified";
import Browse from "../../Components/Browse";

const Home = () => {
  return (
    <div>
      <div>
        <MarketPlace />
      </div>
      <div>
        <Recent />
      </div>
      <div>
        <RecentVerified />
      </div>
      <div>
        <Browse />
      </div>

      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default Home;
