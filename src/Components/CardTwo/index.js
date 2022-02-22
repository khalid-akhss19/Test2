import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import small1 from "../../Assets/Images/cardemage21.png";
import small2 from "../../Assets/Images/cardemage22.png";
import small3 from "../../Assets/Images/cardemage23.png";
import one from "../../Assets/Images/Rectangle 39.png";
import two from "../../Assets/Images/imagebig2.png";
import three from "../../Assets/Images/imagebig3.png";
import profile1 from "../../Assets/Images/Ellipse 9.png";

const CardTwo = ({ img }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.containercard1}>
        <div className={classes.contone}>
          <img src={img} alt="pic" className={classes.cardTwoimage} />
        </div>
        <div className={classes.containerright}>
          <h2 className={classes.cardTwoimahead}>
            Aku Chapter X: The Finale by Micah Johnson
          </h2>
        </div>
      </div>
    </>
  );
};

export default CardTwo;

const useStyles = makeStyles((theme) => ({
  containercard1: {
    display: "flex",
    width: "384px",
    height: "154px",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "20px",
  },
  containerright: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardTwoimage: {
    width: "145.69px",
    height: "143.28px",
    borderRadius: "15px 0px 0px 15px",
  },
  contone: {
    padding: "5px",
  },
  cardTwoimahead: {
    borderRadius: "0px 15px 15px 0px",
    width: "199.69px",
    height: "143.28px",
    // backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    display: "flex",
  },
}));
