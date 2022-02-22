import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useStyles } from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footercontainer}>
        <div style={{ marginLeft: "30px" }}>
          <h1>
            JOIN <br /> Silicon Bets
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur , v ulputate. In v itae
            adipiscing elit. Nec nulla at arcu dui ali q uam , tempor a.
          </p>
          <div
            style={{
              backgroundColor: "white",
              height: "30px",
              justifyContent: "center",
              minwidth: "40%",
              borderRadius: "10px",
              paddingLeft: "10PX",
            }}
          >
            <input
              type="text"
              placeholder="Email @xyz.com"
              style={{ border: "none", width: "20%" }}
            />
            {/* <Button
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                height: "20px",
                width: "70px",
                marginTop: "5px",
              }}
              variant="contained"
            >
              Subscribe
            </Button> */}
          </div>
        </div>

        <div>
          <h1>Silicon Bets</h1>
          <ul className={classes.list}>
            <li>Explore</li>
            <li>Blog</li>
            <li>Become a partner</li>
            <li>Help Center</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h1>Community</h1>
          <ul className={classes.list}>
            <li>Blog</li>
            <li>About</li>
            <li>Token</li>
            <li>Protocol</li>
            <li>Suggested feature</li>
          </ul>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <h4>Language</h4>
          <Button variant="contained" color="primary">
            English
          </Button>
        </div>
        {/* <div
          style={{
            width: "40rem",
            backgroundColor: "blue",
            display: "flex",
            height: "2px",
            marginLeft: "100%",
            alignSelf: "center",
            marginBottom: "40px",
          }}
        ></div> */}
      </div>
      <div
        style={{
          marginTop: "",
          displayGrid: "none",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
          backgroundColor: "#140227",
        }}
      >
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a href="https://www.youtube.com/">
          <YouTubeIcon />
        </a>
        <a href="https://twitter.com/">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
      </div>
    </>
  );
};
export default Footer;
