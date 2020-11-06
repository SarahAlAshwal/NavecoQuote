import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navigator: {
        backgroundColor: "#D3D3D3",
        display: "flex",
        justifyContent: "space-between",
        height: "200px",
        align: 'center',
        width: '500'
    },
      media: {
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 'auto' ,
        marginRight: 'auto',
        textAlign:'center'
      },
      a: {
        color:"black"
      },
      fontx: {
        fontSize: 14,
        width:200,
        alignItems: 'center'
      },
      fonty: {
        fontSize: 12,
        width:775,
        alignItems: 'center',
        textAlign:'center'
      },
      icon: {
          width:190,
          textAlign:'right'
      }
}));

export default function Footer() {
  const classes = useStyles();
 
  return (

   <main>
     <Grid>
        
        <Toolbar className={classes.navigator}>
            {/*contact details*/}
            <div > 
            <div>
                <b>Contact us</b>
            </div>
                <Typography className={classes.fontx}>
                320 Queen St, 
                #100, Fredericton, NB, 
                Canada, E3B 1B2
                506-804-1080
                </Typography>
            </div>
            {/*logo and summary*/}
            <div >
                <div className={classes.media}>
                <img src={require("../../images/footerLogo.png")} alt="company logo" />
                </div>
                <div>
                <p className={classes.fonty}>
                This offering may be a high risk investment. It is open only to accredited investors, 
                through a person authorized to sell the eligible shares. 
                This offering is an exempt offering of shares available to residents of NB. 
                Investors should seek professional advice regarding their personal situation before making an investment decision. 
                Naveco Power nor Naveco Power Investments are professional advisors. 
                Please read the Subscription Agreement, Risk Statement and Disclosure documents prior to subscribing.
                </p>
                </div>
            </div>
            {/*social media icons*/}
            <div className={classes.icon} >
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
             Built By,
              <div>
                <a href='https://www.linkedin.com/in/thasleema-fathima-puroskhan-0a85731a4' className={classes.a} >
                Thasleema Fathima
                </a>
              </div> 
                <a href='https://www.linkedin.com/in/hasnaa-messaoudi-005245191/' className={classes.a} >
                Hasnaa Messaoudi
                </a>
              <div>
                <a href='https://www.linkedin.com/in/sarah-al-ashwal/' className={classes.a} >
                Sarah Al-Ashwal 
                </a>
              </div>
            </div>
        </Toolbar>
        
        
        </Grid>
    </main>   
  );
}