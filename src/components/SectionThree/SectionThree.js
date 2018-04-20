import React, { Component } from 'react';
import { Button, Grid } from 'material-ui';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class SectionThree extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" spacing={8}>
          <Grid item>
            <p>SPEED: GOES HERE</p>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={8}>
          <Grid item>
            <p>PASSENGER COUNT: GOES HERE</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SectionThree;