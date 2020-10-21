import React from "react";
import { Button } from "../stories/Button";

export default function Google_Maps(props) {
 
  const handleAddress = (event) => {
    let start_address = "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20"
    let input_address = document.getElementById('add').value;
    let final_address = start_address  + input_address;
    document.getElementById('gmap_canvas').src = final_address;
    document.getElementById('gmap_canvas').contentWindow.location.reload();
  }
  return (
    <main className="">
      <div className="">
        Enter your Address
      </div>
      <section className="">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="add"
            id="add"
            name="Address"
            type="text"
            placeholder="Address"
          /> 
          <Button  primary={true} backgroundColor={'blue'} size={'small'} label={'Enter'} onClick={handleAddress}/>
        </form>
        <div className=""></div>
        <section className="">
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=25%20Woodridge%20crescent%20Ottawa+()&amp;t=h&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe> 
        
        </section>
      </section>
    </main>
  );
}

