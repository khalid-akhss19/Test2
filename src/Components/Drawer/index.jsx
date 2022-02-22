import { Drawer, ListItem, ListItemText, Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Drawerbtn = ({ open, handleClose }) => {
  return (
    <>
      <div>
        {" "}
        <Drawer open={open} anchor="right">
          <ListItem button onClick={handleClose}>
            <ArrowForwardIosIcon onClick={handleClose} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Create"} />
          </ListItem>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemText primary={"Sign Up"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Explore"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"My Profile"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Market"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"How it Works"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Community"} />
            </ListItem>
          </Link>
        </Drawer>
      </div>
    </>
  );
};
export default Drawerbtn;
