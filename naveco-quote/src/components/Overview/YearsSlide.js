import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import style from '../../styles/SlideStyle';


const useStyles = makeStyles(theme => ({
  root: {
    width: 800 + 24 * 2,
    padding: 24,
  },
  margin: {
    height: theme.spacing(3),
  },
}));



const YearSlider = withStyles(style)(Slider);

export default function YearsSlide(props) {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleSliderChange = (event, newValue) => {
    setYear(newValue);
  };
  const classes = useStyles();
  

  return (
    <Paper className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>{`Year: ${year}`}</Typography>
      <YearSlider valueLabelDisplay="auto" aria-label="year slider" defaultValue={year} min={2020} max={2044} onChange={handleSliderChange} />
      <div className={classes.margin} />
    </Paper>
  );
}



