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

import { ValueScale, Animation, EventTracker } from '@devexpress/dx-react-chart';
import { withStyles,makeStyles  } from '@material-ui/core/styles';

export default function ProductBar(props) {

  const [state, setState] = useState({
    2020: [
      { month: 'Jan', power: 626 },
      { month: 'Feb', power: 702 },
      { month: 'Mar', power: 1044 },
      { month: 'Apr', power: 1005 },
      { month: 'May', power: 1141 },
      { month: 'Jun', power: 1152 },
      { month: 'Jul', power: 1137 },
      { month: 'Aug', power: 1159 },
      { month: 'Sep', power: 1037 },
      { month: 'Oct', power: 751 },
      { month: 'Nov', power: 502 },
      { month: 'Dec', power: 483 },
    ]
  });

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

//returns each montgh inside tooltip
const returnMonth = (month) => {
  return "KWhs in "+ props.state[2020][month].month;
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

//chart x axis data from 200 to 1400
const modifyDomain = domain => [200, 1400];

const classes = useStyles();

   return (
    <div className={classes.root}>
    <Paper >
          <Chart
          data={props.state[2020]}
            //data={data[2020]}
          >
            <ValueScale name="power" modifyDomain={modifyDomain} />
            <ArgumentAxis />
            <ValueAxis scaleName="power" showGrid={false} showLine showTicks  />
            <BarSeries
              name="Power in kwph"
              valueField="power"
              argumentField="month"
              scaleName="power"
            />
             <Title
            text="Production"
            textComponent={TitleText}
             />
            <Animation />
            <Legend />
            <EventTracker />
            <Tooltip
             contentComponent={TooltipContent} 
             sheetComponent={Sheet}
             arrowComponent={Arrow}
            />
          </Chart>
        </Paper>
        </div>
  );
}