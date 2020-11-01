import React from 'react';
import { Card} from "tabler-react";
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
export default function HowItWorks (props) {

  return (
    <Card title = {"How our calculator works ?"} body = {
      <>
      <Typography gutterBottom variant="h6" component="h2">
        This application lets the users provide their location and  monthly energy bill. Then the application does all the required calculations to display the energy production graphs and saving summery tables with estimation for 25 years. Those calculations consider the location electricity rates, system degradation and power escalation rate. Moreover, the application gives the users a financing estimation based on their needs.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => props.close()}> Back </Button>
    </>
    }/>
  );

  

}