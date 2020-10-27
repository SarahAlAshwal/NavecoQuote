import React from "react";
import { Button,TextField , Typography, Box } from '@material-ui/core';
import './frontPage.css';

//initial web address
const webaddress = "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20";

export default function GoogleMaps(props) {

  //adds user input to the webaddress and diplays the map on click
  const handleAddress = () => {
    props.state.finaladdr = webaddress + props.state.address;

    //to diplay the hidden map
    document.getElementById('gmap_canvas').style.visibility = 'visible';
    // to reload
    document.getElementById('gmap_canvas').src = props.state.finaladdr;
    document.getElementById('gmap_canvas').contentWindow.location.reload();
  }

  //updates the address
  const UpdateAddress = (event) => {
    props.state.address = event.target.value;
  }

//residential
  const handleAreatypeRes = () => {
        props.state.isresidential = true;
        document.getElementById("res").style.color = "blue"
        document.getElementById("com").style.color = "black"
  }
//commercial
  const handleAreatypeCom = () => {
        props.state.isresidential =  false;
        document.getElementById("res").style.color = "black"
        document.getElementById("com").style.color = "blue"
  }

  return (
    <main className="wrapper">
      <Box component="span" ml={50} textAlign="center">
      <div className="">
      <Typography variant="h4">
      Enter your Address
      </Typography>
      </div>
      <section className="">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <TextField
          id="add"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Enter your address"
          /*helperText="Full width!"*/
          fullWidth
          margin="normal"
          onChange={UpdateAddress}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <Button color="default" id="res" onClick={handleAreatypeRes}>residential  /</Button>
          <Button color="default" id="com" onClick={handleAreatypeCom}>commercial</Button> 
          <Button variant="contained" color="primary" onClick={handleAddress}>Enter</Button>
        </form>
        <div className=""></div>
        <section className="">
        <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" className="responsive-iframe"
          src={props.state.finaladdr}>
        </iframe> 
        </section>
      </section>
      </Box>
    </main>
  );
}

