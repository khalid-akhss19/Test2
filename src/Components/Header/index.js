import { useState } from "react";
import { useStyles } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../Assets/Images/Ellipse 7.png";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import Drawerbtn from "../Drawer";
import Marketdrop from "../../Units/Marketdrop";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isActive = useMediaQuery("(max-width: 700px)");
  const isDeactive = useMediaQuery("(min-width: 700px)");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
        </div>

        <div className={classes.links}>
          <a href="/">Curated Drops</a>
          <a href="/">Verified Drops</a>
          <a href="/">Marketplace</a>
          <a href="/">Activity</a>
          <h2 href="/" className={classes.compnyy}>
            <Marketdrop /> <ArrowDropDownIcon className={classes.searkhal} />
          </h2>
        </div>
        <div className={classes.Searchicon}>
          <input
            className={classes.search}
            type="text"
            placeholder=" search "
          />
          <SearchIcon className={classes.icon}></SearchIcon>
        </div>

        {isDeactive && (
          <div className={classes.btn}>
            <Button variant="contained" className={classes.buttonOne}>
              Login
            </Button>
            <Button variant="contained" className={classes.buttonTwo}>
              Sign Up
            </Button>
          </div>
        )}
        {isActive && (
          <div>
            <IconButton onClick={handleOpen}>
              <Menu color="primary" />
            </IconButton>
            <Drawerbtn open={open} handleClose={handleClose} />
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
