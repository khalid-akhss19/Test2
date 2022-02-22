import React from "react";
import WrappperMargin from "../WrappperMargin";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MapCardOne from "../MapCardOne";
import MapCardTwo from "../../Components/mapCardTwo";

const RecentVerified = () => {
  const classes = useStyles();
  return (
    <>
      <WrappperMargin>
        <Box pt={3}>
          <Typography variant="h3">Recent Verified Collections</Typography>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography variant="h6">
                External listings that have been verified as legitimate and
                authentic by Nifty Gateway
              </Typography>
            </div>
            <div>
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div>
          </Box>
        </Box>
        <Box display="flex" pt={3}>
          <MapCardTwo />
        </Box>
      </WrappperMargin>
    </>
  );
};

export default RecentVerified;

const useStyles = makeStyles((theme) => ({}));
