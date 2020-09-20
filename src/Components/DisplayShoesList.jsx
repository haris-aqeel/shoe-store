import React from 'react'
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useStateValue} from '../Pages/State/GlobalState'
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
    textAlign: 'center',
    padding: '0 auto',
    boxShadow: '0px 0px 4px grey'
  },
    
});

const useStyles2 = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#b32727",
      color: "#fff",
      
    },
  }));



const DisplayShoesList = (props) => {
    
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const [open, setOpen] = React.useState(false);
    const [{basket}, dispatch] = useStateValue();
    const handleClick = (curr) => {
      setOpen(true);
      dispatch({
          type: "Add_To_The_Basket",
          payload: curr
        })
        
      };

      console.log(basket)

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    setOpen(false);
    };

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
      {props.shoesList.map((curr, index) => {
        return (
        <Grid item key={index}>
        <Card className={classes1.root}  id='hoverEffect'>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="270"
              image={curr.image}
              title="Contemplative Reptile"
            />
            <div className="jss38">
              <span className="jss37" id="lower">
                ${curr.price}    
              </span>
            </div>
            <CardContent>
              <Typography id="title__head" gutterBottom variant="h5" component="h2">
                {curr.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
            onClick={()=>handleClick(curr)}
            variant="contained"
            className={classes2.button}
            startIcon={<AddShoppingCartIcon />}
            id="buttons"
            >
            Add To The Cart
            </Button>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" style={{boxShadow: 'none'}}>
                Shoe successfully Added to the Cart
            </Alert>
            </Snackbar>
          </CardActions>
        </Card>
        </Grid>
        );})}
        </Grid>

      </div>
    )
}

export default DisplayShoesList;
