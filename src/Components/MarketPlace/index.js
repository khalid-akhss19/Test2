import React from "react";
import WrappperMargin from "../WrappperMargin";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const MarketPlace = ({ img }) => {
  const classes = useStyles();
  return (
    <>
      <WrappperMargin>
        <Box
          display="flex"
          alignItems="center"
          pt={3}
          className={classes.paddright}
        >
          <Typography variant="h2">Marketplace</Typography>
          <div className={classes.Marketsearch}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <ArrowDropDownIcon className={classes.MarketOne} />
              </div>
              <InputBase
                placeholder="Search Artist Collection"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Box>
      </WrappperMargin>
    </>
  );
};

export default MarketPlace;

const useStyles = makeStyles((theme) => ({
  MarketOne: {
    color: "#19C30",
  },
  paddright: {
    marginRight: "30px",
  },
  Marketsearch: {
    border: "2px solid black",
    padding: 10,
    borderRadius: 20,
    width: "20rem",
  },
  inpuut: {
    backgroundColor: "white",
  },

  search: {
    position: "relative",
    // backgroundColor: "rgba(23, 60, 86, 1)",
    color: "black",
    borderRadius: "25px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
