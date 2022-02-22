import React from "react";
import WrappperMargin from "../WrappperMargin";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MapCardTwo from "../../Components/mapCardTwo";

const Recent = () => {
  const classes = useStyles();
  return (
    <>
      <WrappperMargin>
        <Box pt={3}>
          <Typography variant="h3">Recent Curated Collections</Typography>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography variant="h6">
                Hand selected and exclusively dropped on Nifty Gateway
              </Typography>
            </div>
            {/* <div>
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div> */}
          </Box>
        </Box>
        <Box display="flex" pt={3}>
          <MapCardTwo />
        </Box>
      </WrappperMargin>
    </>
  );
};

export default Recent;

const useStyles = makeStyles((theme) => ({}));
