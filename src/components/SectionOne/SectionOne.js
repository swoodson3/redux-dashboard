import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SectionOne extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" spacing={16}>
        <Grid item>
          <Button
            variant="raised"
            color="primary"
            className="button-margin">
            Increase Speed!&nbsp;
            <ArrowUpward />
          </Button>
        </Grid>
        <Grid item>
          <p>SPEED: GOES HERE</p>
        </Grid>
        <Grid item>
          <Button
            variant="raised"
            color="secondary"
            className="button-margin">
            Decrease Speed!&nbsp;
            <ArrowDownward />
          </Button>
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default SectionOne;