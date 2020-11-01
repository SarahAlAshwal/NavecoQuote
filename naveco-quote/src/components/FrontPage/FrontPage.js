
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Divider,Button} from '@material-ui/core';
import MediaControlCard from "./Videoc";
import Navigator from "./Navigator"
import Footer from "./Footer"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  evaluate: {
    padding: theme.spacing(21, 1), 
    border: "none", 
    boxShadow: "none"
  },
  evaluatepic: {
    border: "none",
    boxShadow: "none",
    textAlign: "center"
  },
  contact: {
    padding: theme.spacing(1, 1),
    textAlign: "center"
  },
  space: {
    marginBottom: theme.spacing(2),
    color: 'white'
  }
}));



export default function FrontPage(props) {

  const classes = useStyles();

  return (
    <div>
   
    
    
    <Divider className={classes.space}/>
   
    <Grid container spacing={0} className={classes.space}>

      <Grid item xs={6} >
          <Card className={classes.evaluatepic}>
          <img src={require("../../images/mainPic.png")}/>
          </Card>
      </Grid>

      <Grid item xs={6}>
        <Card className={classes.evaluate} >
          <CardContent>
                    <Typography component="h1" variant="h5">
                      Ready to get your estimation?
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    Yes, we provide you with the total cost, production, return on investment, payback period, rebate amount,
                    environmental benefits, financing options and saving summary upto 25 years.
                    </Typography>
                    <Button variant="contained" color="primary" id="next" onClick={props.frontPage}>Evaluate</Button>
          </CardContent>
        </Card>
      </Grid>

    </Grid>

    <Grid container spacing={0}>

      <Grid item xs={7} >
        <Card className={classes.evaluatepic}>
          <CardContent>
            <Typography component="h1" variant="h5">
            How we calculate
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            Get your estimation overview for savings and finanacing&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary" id="next" >  More Info</Button>
            </Typography>
            <img src={require("../../images/calculate.gif")}/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={5} >
        <Card className={classes.evaluatepic}>
          <MediaControlCard />
        </Card>
      </Grid>
    </Grid>
 
  <Grid>
    <Card className={classes.contact}>
      <CardContent>
        <Typography component="h1" variant="h5">
          Stay in touch
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://naveco.ca/contactus/' className={classes.a} >
          <Button variant="contained" color="primary" id="next">contact us</Button>
          </a>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Contact us directly to get more details 
        </Typography>
      </CardContent>
    </Card>
  </Grid>


  <Grid>
    <Footer />
  </Grid>

  </div>
  );
}

