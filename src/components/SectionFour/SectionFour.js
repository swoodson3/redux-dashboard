import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  }
});

function getSteps() {
  return [
    'JavaScript',
    'NodeJS Express',
    'AngularJS & Mongo',
    'AngularJS Services and SQL',
    'Joins, Extended Project',
    'React',
    'Redux, Redux-Sagas'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Your First Week we reviewed Javascript -- 
      Functions, Variables, Loops, Control Blocks, jQuery. 
      Remember 'What is this even doing?'`;
    case 1:
      return `Your Second Week we learned servers! 
              Node! Express! GET! POST!
              Remember AJAX? WOAH WOAH WOAH WOAH WOAH WOAH`;
    case 2:
      return `Your Third Week we dove into Mongo and Angular! Bye jQuery!`;
    case 3:
      return ``;
    case 4:
      return ``;
    case 5:
      return ``;
    case 6:
      return ``;
    default:
      return 'Unknown step';
  }
}

class SectionFour extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Grid item xs={8}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} orientation="vertical">

              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                      </Button>
                          <Button
                            variant="raised"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {
              activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>All Code Challenges completed - you're finished</Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                </Button>
                </Paper>
              )
            }
          </Paper>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SectionFour);