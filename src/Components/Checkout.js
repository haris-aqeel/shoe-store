import React from "react";
import PropTypes from "prop-types";

import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import "./Navbar1.css";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import InfoIcon from "@material-ui/icons/Info";
import StarsIcon from "@material-ui/icons/Stars";
import { useStateValue } from "../Pages/State/GlobalState";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles2 = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: "block",
    maxWidth: 300,
    overflow: "hidden",
    width: "100%",
  },
}));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#b32727",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#b32727",
    },
  },
  navIcon: {
    color: "#fff",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  //necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#b32727",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [{ basket }, dispatch] = useStateValue();

  let count = 0;
  basket.map((curr) => {
    count += +curr.price;
    return 'true'
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClicks = (curr) => {
    dispatch({
      type: "Remove_From_Basket",
      payload: curr,
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const classes2 = useStyles2();
  const theme2 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 5;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const useStyles11 = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        maxWidth: theme.spacing(80),
        width: theme.spacing(46),
        height: theme.spacing(26),
      },
    },
    paper: {
      display: "flex",
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    sub_info: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  }));
  const classes11 = useStyles11();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon className={classes.navIcon}>
              {" "}
              <HomeIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon className={classes.navIcon}>
              {" "}
              <StorefrontIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItem>
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon className={classes.navIcon}>
              {" "}
              <InfoIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItem>
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon className={classes.navIcon}>
              {" "}
              <ContactMailIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <LoyaltyIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={"Membership"}
            style={{ color: "#fff", textDecoration: "none" }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <SubscriptionsIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={"Subscribe"}
            style={{ color: "#fff", textDecoration: "none" }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <StarsIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={"Favourites"}
            style={{ color: "#fff", textDecoration: "none" }}
          />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
    console.log(
      AutoPlaySwipeableViews,
      open,
      handleClick,
      handleClose,
      classes2,
      theme2,
      activeStep,
      maxSteps,
      handleNext,
      handleBack,
      handleStepChange
    );
    
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#b32727" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome to ShoeStore
          </Typography>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {basket?.length > 0 ? (
          <div className="checkout__main">
            <div className="checkout__info">
              <div className={classes11.root}>
                {basket.map((curr) => {
                  return (
                    <>
                      <Paper elevation={3} className={classes11.paper}>
                        <img
                          src={
                            curr.image !== undefined
                              ? curr.image
                              : curr.images[0]
                          }
                          alt="shoeImage"
                          width="140"
                          height="140"
                        />
                        <div className={classes11.sub_info}>
                          <strong>{curr.name}</strong>
                          <h2>${curr.price}</h2>
                          <Button
                            variant="contained"
                            className="AddtoCart"
                            id="buttons12"
                            onClick={() => {
                              handleClicks(curr);
                            }}
                          >
                            <DeleteSweepIcon />
                            Remove
                          </Button>
                        </div>
                      </Paper>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="checkout__finalPrices">
              <h2>Summary</h2>
              <div className="table">
                <span>SubTotal  </span>
                <span>${count}</span>
              </div>
              <div className="table">
                <span>Delievery Charges  </span>
                <span>${0}</span>
              </div>
              <hr className="hr" />
              <div className="table x">
                <span>Total </span>
                <span>${count}</span>
              </div>
              <div className="buttons">
                <Button variant="contained" className="AddtoCart" id="buttons1">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
