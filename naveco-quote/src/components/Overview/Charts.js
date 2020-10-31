import * as React from 'react';
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

export default function Charts (props) {

//styles for toolpit content and colors and to adjust the charts root margin
const useStyles = makeStyles({
  arrow: {
    "&::after": {
      background: "orange"
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

// //css for title "Production"
const TitleText = withStyles({ title: { background: "orange", marginBottom: '30px' } })(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.title} />
));

// //returns each month inside tooltip
const returnYear = (year) => {
  return props.data[year].year;
}

// //entire content of tooltip
const TooltipContent = (props) => {
  const { targetItem, ...restProps } = props;

  return (
  
    <div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentTitleStyle}
          text={returnYear(props.targetItem.point)}
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


//chart x axis data from 200 to 1400
const modifyDomain = domain => {
  return [0, props.data[props.data.length - 1].value + 50 ]
}

const classes = useStyles();

   return (
    <div className={classes.root}>
    <Card body = {
       <Chart data={props.data}>
       <ValueScale name="value" modifyDomain={modifyDomain}/>
       <ArgumentAxis />
       <ValueAxis scaleName="value" showGrid={false} showLine showTicks  />
       <BarSeries
         name="value in KWh"
         valueField="value"
         argumentField="year"
         scaleName="value"
       />
        <Title
       text="Power Value"
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