import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
      a: {
        color:"white"
      },
      align: {
        display: "flex",
        justifyContent: "space-between",
      }
}));

export default function Navigator() {
  const classes = useStyles();

  return (

   <main>
    <AppBar position="static" >
        <Toolbar className= {classes.align}>
            <div>
            <a href='https://www.facebook.com/navecopower/' className={classes.a} >
            <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/navecopower/?hl=en' className={classes.a} >
            <InstagramIcon />
            </a>
            <a href='https://twitter.com/NavecoPower' className={classes.a} >
            <TwitterIcon />
            </a>
            <a href='https://www.linkedin.com/company/navecopower' className={classes.a} >
            <LinkedInIcon />
            </a>
            </div>
            
            <div>
            <img src={require("../../images/navigatorLogo.png")}/>
            </div>
        </Toolbar>
    </AppBar>
    </main>   
  );
}