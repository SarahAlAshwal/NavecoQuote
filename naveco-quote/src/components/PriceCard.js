import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "../AppStyle";

const useStyles = makeStyles(styles);

export default function PriceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography variant="h5" component="h2">
          Total Price
        </Typography>
        <div className={classes.inlineClass}>
          <Typography variant="h6" component="h2">
            $19,745.00
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Including HST + Rebate Deducted
          </Typography>
        </div>
        

        <Typography className={classes.pos} color="textSecondary">
          
          New energy bill
          $27.47/month
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Price
        </Button>
      </CardActions>
    </Card>
  );
}