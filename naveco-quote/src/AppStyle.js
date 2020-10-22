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
    flexDirection: 'row'
  },
  typography:{
    fontSize: 'medium',
  },
  saving:{
  display:'flex',
  flexDirection: 'row',
  },
  Button: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6)
  }
});