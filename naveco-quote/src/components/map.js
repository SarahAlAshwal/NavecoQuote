import React, { useState } from "react";
import { Button, TextField, Typography, Box } from '@material-ui/core';
import './frontPage.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Alert, Header, Form } from "tabler-react";

//initial web address
const webaddress = "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20";

const useStyles = makeStyles(theme => ({
  cardClass: {
    //display: 'flex',
    //justifyContent: 'space-evenly',
    padding: '10px'
  },
}));

export default function GoogleMaps(props) {

  let finalAddr = "";
  const classes = useStyles();



  //adds user input to the webaddress and diplays the map on click
  const handleAddress = () => {
    finalAddr = webaddress + props.address;
    //to diplay the hidden map
    document.getElementById('gmap_canvas').style.visibility = 'visible';
    // to reload
    document.getElementById('gmap_canvas').src = finalAddr;
  }

  return (
    <>
      <Card  className={classes.cardClass}>
          <Header.H3>Enter your Address</Header.H3>
          {(props.addressFotmaError) && <Alert type="danger" hasExtraSpace>
            <div>{props.addressFotmaError}</div>
          </Alert>
          }
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <Form.Group label="Address">
              <Form.InputGroup>
                <Form.Input
                  id="add"
                  placeholder="Enter your address"
                  onChange={props.UpdateAddress}
                />
                <Form.InputGroupAppend>
                  <Button
                    RootComponent="a"
                    color="primary"
                    onClick={handleAddress}
                    disabled={props.addressButtonDisabled}
                    type="submit"
                  >
                    Go!
              </Button>
                </Form.InputGroupAppend>
              </Form.InputGroup>
            </Form.Group>
          </form>
          <Card>
            <div>
              <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" className="responsive-iframe"
                src={finalAddr}>
              </iframe>
            </div>


            <Button
              variant="contained"
              color="primary"
              id="next"
              onClick={props.changeMode}
              disabled={props.addressButtonDisabled}
            >
              Next
            </Button>
            </Card>
            </Card>
</>
  );
}
