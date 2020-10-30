import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
//import Card from '@material-ui/core/Card';
import {Card} from "tabler-react";
import SettingsIcon from '@material-ui/icons/Settings';
import styles from "../../AppStyle";
import {formatNumbers} from '../../helpers/formatNumbers';


const useStyles = makeStyles(styles);

export default function SavingSummery(props) {

  const classes = useStyles();
  return (

    <Card body = {
      <>
      <div className={classes.saving}>
          <AttachMoneyIcon fontSize="large"/>
          <Typography gutterBottom variant="h5" component="h2">
            {`Congratulations!! You can save ${formatNumbers(props.saved)} with this solar system in the next 25 years!`}
        </Typography>
        </div>
        <div className={classes.saving}>
        <SettingsIcon fontSize="large"/>
        <div>
        <Typography gutterBottom variant="h5" component="h2">
          {`Size: ${props.capacity} KW System`}
        </Typography>
        {/* <Typography gutterBottom variant="h5" component="h2">
          {`Pitch: 25
        </Typography> */}
        {/* <Typography gutterBottom variant="h5" component="h2">
          {`Address: ${props.city}`}
        </Typography> */}
        </div>
      </div>
      </>} />
     
  );
}


// {/* <Card className={classes.root} >
//       <CardContent>
//         <div className={classes.saving}>
//           <AttachMoneyIcon fontSize="large"/>
//           <Typography gutterBottom variant="h5" component="h2">
//             {`Congratulations!! You can save ${formatNumbers(props.saved)} with this solar system in the next 25 years!`}
//         </Typography>
//         </div>

//         <div className={classes.saving}>
//           <SettingsIcon fontSize="large"/>
//           <div>
//           <Typography gutterBottom variant="h5" component="h2">
//             {`Size: ${props.capacity} KW System`}
//           </Typography>
//           {/* <Typography gutterBottom variant="h5" component="h2">
//             {`Pitch: 25
//           </Typography> */}
//           {/* <Typography gutterBottom variant="h5" component="h2">
//             {`Address: ${props.city}`}
//           </Typography> */}
//           </div>
//         </div>
        
//       </CardContent>
//       </Card> */}