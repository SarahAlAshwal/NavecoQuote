import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { PieChart } from 'react-minimal-pie-chart';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function OffsetBill (props) {

  const classes = useStyles();
  
  const dataMock=[
    { title: 'Solar', value: 70, color: '#ffd700', },
    { title: 'Grid', value: 30, color: '#FF0000' },
    ];

  const defaultLabelStyle = {
      fontSize: '10px',
      fontFamily: 'sans-serif',
    };
  
    const shiftSize = 0.5;
  return (
    <Card className={classes.root}>
      <CardContent>
      <h3>Power Bill Offset</h3>
      <PieChart
        style = {{width:200}}
        data={dataMock}
        animate={true}
        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
        label={({ dataEntry }) => dataEntry.title ==='Solar' ? `${dataEntry.value}%`: ''}
        labelStyle={{
          ...defaultLabelStyle,
        }}
      />

      </CardContent>
      </Card>
 
   
  
  );
}

