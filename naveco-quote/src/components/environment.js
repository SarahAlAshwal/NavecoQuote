import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import {formatNumbers} from '../helpers/formatNumbers';




const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },


  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9,
    margin: "auto",
    maxWidth: 220,
    alignItems:'center',
    display: "flex", 
    justifyContent:"center"
  },
  container: {
    display: 'flex' /* or inline-flex */
  }
}));




export default function Environment(props) {
  
  //const [state, setState] = useState(43298.28);

  const classes = useStyles();



  return (
   
    <main >
      <AppBar  position="static" className={classes.rootAppBar} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           $ {formatNumbers(props.state)} saved over 25 years
          </Typography>
        </Toolbar>
      </AppBar>


      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" justifyContent="space-between" >
      
      <Box flexBasis={250}>
      <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <b>{formatNumbers(props.state/137)}</b> Gallons saved
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={require("../images/oil.jpeg")}
        title="media"
      />
      </Card>
      </Box>

      <Box flexBasis={250}>
      <Card >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>{Math.round(props.state/1500)}</b> cars off the road
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={require("../images/cars.png")}
        title="media"
      />
      </Card>
      </Box>

      <Box flexBasis={250}>
      <Card >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <b>{formatNumbers(props.state/0.28)}</b> lbs of coal not burned
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={require("../images/coal2.png")}
        title="media"
      />
      </Card>
      </Box>

      </Box>

    </main>

  );
}