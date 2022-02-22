import React, { useState } from "react";
import WrappperMargin from "../WrappperMargin";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MapCardOne from "../MapCardOne";
import MapCardTwo from "../../Components/mapCardTwo";
import SortBy from "../../Units/SortBy";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Browse = () => {
  const classes = useStyles();
  const [Set, SetOpen] = useState(false);
  const Incre = () => {
    SetOpen(!Set);
  };
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
            <a>
              <Box
                display="flex"
                justifyContent="center"
                border={1}
                borderColor="gray"
                borderRadius="50px"
                alignItems="center"
              >
                <SortBy />
                <ArrowDropDownIcon />
              </Box>
            </a>
          </Box>
        </Box>
        <Box>
          <Box display="flex" pt={3}>
            <MapCardOne />
          </Box>
        </Box>
      </WrappperMargin>
    </>
  );
};

export default Browse;

const useStyles = makeStyles((theme) => ({}));
