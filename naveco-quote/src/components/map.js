import React, {useState} from "react";
import { Button,TextField , Typography, Box } from '@material-ui/core';
import './frontPage.css';
import {Card} from "tabler-react";

//initial web address
const webaddress = "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20";

export default function GoogleMaps(props) {

  const [residential, setResidential] = useState(true);
  let finalAddr = "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20Ottawa";

  //adds user input to the webaddress and diplays the map on click
  const handleAddress = () => {
    finalAddr = webaddress + props.address;
    //to diplay the hidden map
    document.getElementById('gmap_canvas').style.visibility = 'visible';
    // to reload
    document.getElementById('gmap_canvas').src = finalAddr;
    
    
  }

  

  return (
    <Card body = {
      <>
      <Typography variant="h4">
      Enter your Address
      </Typography>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <TextField
        id="add"
        label="Address"
        style={{ margin: 8 }}
        placeholder="Enter your address"
        /*helperText="Full width!"*/
        fullWidth
        margin="normal"
        onChange={props.UpdateAddress}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
        <Button variant="contained" color="primary" onClick={handleAddress}>Enter</Button>
      </form>
      <div>
       <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" className="responsive-iframe"
      src={finalAddr}>
       </iframe>
      </div>
      
    <Button variant="contained" color="primary" id="next" onClick = {props.changeMode}>Next</Button>
     </>}
     />

    
  
  );
}
//
// {/* <main className="wrapper">
//       <Box component="span" ml={50} textAlign="center">
//       <div className="">
//       <Typography variant="h4">
//       Enter your Address
//       </Typography>
//       </div>
//       <section className="">
//         <form autoComplete="off" onSubmit={event => event.preventDefault()}>
//         <TextField
//           id="add"
//           label="Address"
//           style={{ margin: 8 }}
//           placeholder="Enter your address"
//           /*helperText="Full width!"*/
//           fullWidth
//           margin="normal"
//           onChange={props.UpdateAddress}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="outlined"
//         />
//           <Button color="default" id="res" onClick={handleAreatypeRes}>residential  /</Button>
//           <Button color="default" id="com" onClick={handleAreatypeCom}>commercial</Button> 
//           <Button variant="contained" color="primary" onClick={handleAddress}>Enter</Button>
//         </form>
        
//         <section className=""> 
//          <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" className="responsive-iframe"
//           src={finalAddr}>
//         </iframe>
//         <div className="">
//         <Button variant="contained" color="primary" id="next" onClick = {props.changeMode}>Next</Button>
//         </div>
//         </section>
//       </section>
//       </Box>
//     </main> */}