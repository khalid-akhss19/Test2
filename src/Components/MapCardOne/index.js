import React, { useState } from "react";
import CardOne from "../../Components/CardOne";
import Data from "./Data";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import WrappperMargin from "../WrappperMargin";
import { Box } from "@material-ui/core";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const MapCardOne = () => {
  const classes = useStyles();
  const [Set, SetOpen] = useState(false);
  const Incre = () => {
    SetOpen(!Set);
  };
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.CardMapContainer}
    >
      <Grid container alignItems="center" className={classes.CardMapCenter}>
        <Grid container alignItems="center">
          <div>
            <Box>
              <div className={classes.accord}>
                <div>
                  <Button onClick={Incre}>
                    <Box
                      display="flex"
                      border={2}
                      borderColor="black"
                      borderRadius="30px"
                    >
                      <ArrowForwardIcon />
                    </Box>
                  </Button>
                  <div>
                    {Set && (
                      <div>
                        <Accordion style={{ width: "370px" }}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              Status
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>On Sale</Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ width: "370px" }}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              Drop Type
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>Curated</Typography>
                            <Typography>Verified</Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: "370px" }}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              Price (USDT)
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>Currency USDT</Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Box>
          </div>
          {Data.map(({ img }) => {
            return (
              <Grid
                item
                container
                justifyContent="space-around"
                className={classes.CardMapCenter}
                xs={12}
                md={3}
              >
                <div>
                  <CardOne img={img} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MapCardOne;
