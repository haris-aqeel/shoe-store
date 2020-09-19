import React from "react";
import PropTypes from "prop-types";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import "./Navbar1.css";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import InfoIcon from "@material-ui/icons/Info";
import StarsIcon from "@material-ui/icons/Stars";

import ProductInd from "../Pages/Productind";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

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

    
const [open, setOpen] = React.useState(false);
const handleClick = () => {
    setOpen(true);
  };

const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const classes2 = useStyles2();
  const theme2 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  console.log(props.case[0].images);
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
              <Badge badgeContent={1} color="secondary">
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

        <div className="individualElement">
          <div className="picture__Head">
            <h3>{props.name}</h3>
            <div>
              <div className={classes2.root}>
                <AutoPlaySwipeableViews
                  axis={theme2.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {props.case[0].images!==undefined? props.case[0].images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <img
                          className={classes2.img}
                          src={step}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  )):<img
                  className={classes2.img}
                  src={props.case[0].image}
                  
                />}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  variant="text"
                  style={{ maxWidth: "300px" }}
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
          <div className="detail__pricing">
                <span class="jss142">${props.case[0].price}</span>
            <h2>{props.case[0].name}</h2>
            <h2>Description</h2>
            <p>{props.case[0].desc!==undefined ? props.case[0].desc: props.case[0].name} "harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years."</p>
            <h2>Reviews</h2>
            <p>
              <span style={{fontSize: '24px'}}>🌟🌟🌟🌟🌟</span>
            </p>
            <div className="buttons">
              <Button
                onClick={handleClick}
                textAlign="center"
                variant="contained"
                color="#fff"
                className='AddtoCart'
                startIcon={<AddShoppingCartIcon />}
                id="buttons1"
              >
                Add To The Cart
              </Button>
              <Button
                onClick={handleClick}
                textAlign="center"
                variant="contained"
                color="#fff"
                className='MarkFavourite'
                startIcon={<AddShoppingCartIcon />}
                id="buttons2"
              >
                Mark As Favourite
              </Button>
            </div>
          </div>
        </div>
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
