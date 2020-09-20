import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./DisplayData.css";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },

  control: {
    padding: theme.spacing(2),
  },
}));

const useStyles1 = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: 20,
  },
});

export default function DisplayData(props) {
  // const [spacing, setSpacing] = React.useState();
  const classes = useStyles();
  const classes1 = useStyles1();

 
  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  return (
    <div className={classes.root}>
      <h1 style={{fontSize: '21px'}}>Top Rated Products</h1>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {props.datas.map((curr, index) => {
          return (
            <Grid item key={index}>
              <Card className={classes1.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="270"
                    image={curr.images[0]}
                    title="Contemplative Reptile"
                  />
                  <div
                    className="ratings"
                    style={{ fontSize: "22px", padding: "5px 15px" }}
                  >
                    <span role="img" aria-labelledby='[]'>🌟🌟🌟🌟🌟</span>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {curr.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {curr.desc.slice(0, 115) + "...."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: "#b32727" }}>
                  <Link to='/products'  style={{ color: "#b32727", textDecoration: 'none'}}>Go To Products</Link>
                  </Button>

                  <Button size="small" style={{ color: "#b32727" }} >
                  <Link to={`/product/1:${curr.id}`}  style={{ color: "#b32727", textDecoration: 'none'}}> Learn More </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <div className="jss42">
        <svg
          className="MuiSvgIcon-root jss43"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>

      <h1 style={{fontSize: '21px'}}>Top Reviewed Products</h1>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {props.reviewed.map((curr, index) => {
          return (
            <Grid item key={index}>
              <Card className={classes1.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="270"
                    image={curr.images[0]}
                    title="Contemplative Reptile"
                  />
                  <div className="jss38">
                    <span className="jss37">
                      {curr.reviewsCount}
                      <span className="jss40">reviews</span>
                    </span>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {curr.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {curr.desc.slice(0, 115) + "...."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: "#b32727" }}>
                  <Link to='/products'  style={{ color: "#b32727", textDecoration: 'none'}}>Go To Products</Link>
                  </Button>
                  <Button size="small" style={{ color: "#b32727" }}>
                  <Link to={`/product/2:${curr.id}`}  style={{ color: "#b32727", textDecoration: 'none'}}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      
    </div>
  );
}
