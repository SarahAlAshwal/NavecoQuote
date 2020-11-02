import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { PieChart } from 'react-minimal-pie-chart';
import {formatNumbers} from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import {totalSaving, totalOriginal, newBill} from '../../helpers/overviewCalculation';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontSize: 'samll',
  },
});

export default function OffsetBill () {

  const state = useContext(StateContext);

  const classes = useStyles();

  //const solar = totalSaving(state.acAnnual, state.rate) / totalOriginal(state.monthlyAmount, state.rate)
  const solar = newBill(state.acMonthly, state.monthlyAmount, state.year, state.rate) / state.monthlyAmount;
  const dataMock=[
    { title: 'Solar', value: (solar) * 100 , color: 'orange', },
    { title: 'Grid', value: (1 - (solar)) * 100 , color: 'blue' },
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
        label={({ dataEntry }) => dataEntry.title ==='Solar' ? ` Solar ${formatNumbers(dataEntry.value)}%`: `Grid ${formatNumbers(dataEntry.value)}%`}
        labelStyle={{
          ...defaultLabelStyle,
        }}
      />

      </CardContent>
      </Card>
 
   
  
  );
}

