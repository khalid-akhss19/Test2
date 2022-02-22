import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "#1b2a35",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "70px",
    width: "100%",
    "& a": {
      textDecoration: "none",
      padding: "0 9px 0 9px",
      color: "#D3D3D3",
      "&:hover": {
        color: "white",
      },
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  logo: {
    height: "60px",
    marginLeft: "10px",
  },
  Searchicon: {
    // backgroundColor: "white",
    display: "flex ",
    height: "30px",
    alignItems: "center",
    gap: "5px",
    borderRadius: "20px",
    "::placeholder": {},
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "40px",
    },
  },
  search: {
    backgroundColor: "white",
    color: "black",
    border: "none",
    outline: "none",
    [theme.breakpoints.up("md")]: {
      display: "none",
      backgroundColor: "none",
    },
  },
  searkhal: {
    cursor: "pointer",
  },
  icon: {
    color: "gray",
    cursor: "pointer",
  },
  line: {
    display: "flex",
    width: "2px",
    height: "30px",
    backgroundColor: "blue",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  compnyy: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  btn: {
    display: "flex",
    gap: "20px",
    marginRight: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonOne: {
    color: "white",
    backgroundColor: "#1b2a35 !important",
    borderRadius: " 20px",
    border: "2px solid white",
  },
  buttonTwo: {
    borderRadius: " 20px",
  },

  overall: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));
