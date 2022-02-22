import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footercontainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    alignContent: "center",
    justifyItems: "center",
    backgroundColor: "#140227",
    color: "white",
    minHeight: "300px",
    width: "100%",

    "& li": {
      listStyle: "none",
      padding: "10px",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr ",
      textAlign: "start",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      textAlign: "start",
    },
  },
}));
