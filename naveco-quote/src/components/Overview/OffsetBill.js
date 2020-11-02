import React, { useContext } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {formatNumbers} from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import {newBill} from '../../helpers/overviewCalculation';
import {Card} from "tabler-react";


export default function OffsetBill () {
  const state = useContext(StateContext);
  const solar = newBill(state.acMonthly, state.monthlyAmount, state.year, state.rate) / state.monthlyAmount;
  
  const dataMock = [
    { title: 'Solar', value: (1 - solar) * 100 , color: 'orange', },
    { title: 'Grid', value: (solar) * 100 , color: 'blue' },
    ];

  const defaultLabelStyle = {
      fontSize: '10px',
      fontFamily: 'sans-serif',
    };

    //shiftSize determine the space between the pie peices 
    const shiftSize = 0.5;
    
  return (
    <Card title = "Power Bill">
      <Card.Body>
        <PieChart
          style = {{width:200}}
          data={dataMock}
          animate={true}
          segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
          label={({ dataEntry }) => dataEntry.title === 'Solar' ? ` Solar ${formatNumbers(dataEntry.value)}%`: `Grid ${formatNumbers(dataEntry.value)}%`}
          labelStyle={{
            ...defaultLabelStyle,
            fontSize:"8px"
          }}
        />
      </Card.Body>
    </Card>
  );
}


