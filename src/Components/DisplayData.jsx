import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
      height: 140,
      width: 100,
      padding: 0
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  
  export default function DisplayData( props ) {

    const [storeData, setStoreData] = useState([])
    const [spacing, setSpacing] = React.useState();
    const classes = useStyles();
    
    
    var item1 = props.datas[0]
    var item2 = props.datas[1]
    var item3 = props.datas[2]

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
  
    return (
     
        <Grid item xs={4}>
           <h1>Top Rated Products</h1>
          <Grid container justify="center" display="flex" >
          <Card className={classes.root}>
            <CardActionArea>
                
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="270"
                image={item1.images[0]}
                title="Contemplative Reptile"
                />
                <div className="ratings" style={{fontSize: '22px', padding: '5px 15px'}}>🌟🌟🌟🌟🌟 </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item1.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {(item1.desc.slice(0, 140)) + '....'}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Go To Products
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="270"
                image={item1.images[0]}
                title="Contemplative Reptile"
                />
                <div className="ratings" style={{fontSize: '22px', padding: '5px 15px'}}>🌟🌟🌟🌟🌟 </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item1.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {(item1.desc.slice(0, 140)) + '....'}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Go To Products
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="270"
                image={item1.images[0]}
                title="Contemplative Reptile"
                />
                <div className="ratings" style={{fontSize: '22px', padding: '5px 15px'}}>🌟🌟🌟🌟🌟 </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item1.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {(item1.desc.slice(0, 140)) + '....'}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Go To Products
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
            {/* {item1.name}
            {item2.name}
            {item2.name} */}
          </Grid>
        </Grid>
        
      
    );
  }
