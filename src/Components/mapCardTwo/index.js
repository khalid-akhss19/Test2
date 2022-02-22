import React from "react";
import CardTwo from "../../Components/CardTwo";
import DataTwo from "./DataTwo";
import { Grid, Typography, Box } from "@material-ui/core";
import { useStyles } from "./style";
import Carousel from "react-elastic-carousel";

const MapCardTwo = ({ img }) => {
  const classes = useStyles();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Grid container className={classes.CardMapContainer}>
      <Grid container alignItems="center" className={classes.CardMapCenter}>
        <Grid container alignItems="center">
          <Carousel breakPoints={breakPoints}>
            {DataTwo.map(({ img }) => {
              return (
                <Grid
                  item
                  container
                  className={classes.CardMapCenter}
                  md={6}
                  xs={12}
                  lg={4}
                  justify="center"
                >
                  <CardTwo img={img} />
                </Grid>
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MapCardTwo;
