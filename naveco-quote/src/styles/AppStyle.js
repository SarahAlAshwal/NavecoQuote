export default theme => ({
  root: {
    minWidth: 275,
    maxWidth: 345,
    fontSize: '15px',
  },
  rootHeader: {
    color:'white',
    backgroundColor: 'DarkBlue',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginTop: '7px',
    marginLeft: '7px'
  },
  pos: {
    marginBottom: 12,
  },
  inlineClass : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  typography:{
    fontSize: 'medium',
  },
  saving:{
  display:'flex',
  flexDirection: 'row',
  margin: '10px'
  },
  Button: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6)
  },
  rootPrice: {
    minWidth: 275,
    fontSize: '15px'
  },
  cardDiv: {
    display: "flex",
    justifyContent: 'center'
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center'
  },
  priceCardValue: {
    color: 'DarkBlue'
  },
  OverviewHeader: {
    display: "flex",
    justifyContent: 'space-between'
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    margin:'1em'
    
  }
});