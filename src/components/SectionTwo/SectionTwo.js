import React, { Component } from 'react';
import { Button, Grid } from 'material-ui';
import Input, { InputLabel } from 'material-ui/Input';
import {CheckBox} from '@material-ui/icons'
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class SectionTwo extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" spacing={16}>
          <Grid item>
            <InputLabel>Name:</InputLabel>
            <Input />
          </Grid>
          <Grid item>
            <Button
              variant="raised"
              color="primary"
              className="button-margin">
              Check In!&nbsp;
              <CheckBox />
          </Button>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={16}>
          <Grid item>
            <ul>PASSENGER LIST: GOES HERE</ul>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SectionTwo;