import * as React from 'react';
import {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Tooltip,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import {Card} from "tabler-react";

import { ValueScale, Animation, EventTracker } from '@devexpress/dx-react-chart';
import { withStyles,makeStyles  } from '@material-ui/core/styles';

export default function ProductBar(props) {

//styles for toolpit content and colors and to adjust the charts root margin
const useStyles = makeStyles({
  arrow: {
    "&::after": {
      background: "red"
    }
  },
  sheet: {
    background: "#478af5"
  },
  root: {
    "& .MuiPaper-root": {
    }
  }
});

//tooltip arrow
const Arrow = props => {
  const classes = useStyles();
  return <Tooltip.Arrow {...props} className={classes.arrow} />;
};
//tooltip content update
const Sheet = props => {
  const classes = useStyles();
  return <Tooltip.Sheet {...props} className={classes.sheet} />;
};
//styling of fonts inside tooltip sheet
const tooltipContentTitleStyle = {
  fontWeight: 'bold',
  paddingBottom: 0,
};
const tooltipContentBodyStyle = {
  paddingTop: 0,
};

//css for title "Production"
const TitleText = withStyles({ title: { background: "orange", marginBottom: '30px' } })(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.title} />
));

//returns each month inside tooltip
const returnMonth = (month) => {
  return "KWhs in "+ props.state[props.changedYear][month].month;
}

//entire content of tooltip
const TooltipContent = (props) => {
  const { targetItem, ...restProps } = props;

  return (
  
    <div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentTitleStyle}
          text={returnMonth(props.targetItem.point)}
        />
      </div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={props.text}
        />
      </div>
    </div>
   
  );
};

const getData = () => {
  return props.state[props.changedYear];
}

//chart x axis data from 200 to 1400
const modifyDomain = domain => [0, 1500];

const classes = useStyles();

   return (
    <div className={classes.root}>
    <Card body = {
       <Chart data={getData()}>
       <ValueScale name="power" modifyDomain={modifyDomain}/>
       <ArgumentAxis />
       <ValueAxis scaleName="power" showGrid={false} showLine showTicks  />
       <BarSeries
         name="Power in KWh"
         valueField="power"
         argumentField="month"
         scaleName="power"
       />
        <Title
       text="Production"
       textComponent={TitleText}
        />
       <Animation />
       <EventTracker />
       <Tooltip
        contentComponent={TooltipContent} 
        sheetComponent={Sheet}
        arrowComponent={Arrow}
       />
     </Chart>
    }/>
        </div>
  );
}