import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    minWidth: '90%',
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
      return (
      `Your First Week we reviewed Javascript -- 
      Functions, Variables, Loops, Control Blocks, jQuery. 
      Remember 'What is this even doing?'`
      );
    case 1:
      return (
      `Your Second Week we learned servers! 
       Node! Express! GET! POST!
       Remember $.ajax()? The AJAX hat? BodyParser?`
      );
    case 2:
      return (
        `Your Third Week we dove into MongoDB and AngularJS! Bye jQuery!
        PUT! DELETE! Angular Controllers, Modules, Directives! 
        MongoDB and findById? FULL STACK!!!`
      );
    case 3:
      return (
        `Your Fourth Week we learned postgreSQL and AngularJS services!
        Holy cow! Databinding! Tables! Columns! SQL Commands! `
      );
    case 4:
      return (
        `Your Fifth Week we learned JOINs! 
        You worked really hard on your AngularJS capstone!
        Time management! Trello! `
    );
    case 5:
      return (
        `Your Sixth week we dove head-first into React!
        Components and Classes! Spread and .map()! State and Props! 
        EVERYTHING IS A COMPONENT!!!1!!`
      );
    case 6:
      return (
        `Your Seventh week we dealt with Redux!
        connect() and Currying! dispatch, mapStateToProps!
        Actions, Reducers, Store, Axios!`
      );
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
      <Paper style={{
        maxWidth: '50%',
        margin: 'auto'
      }}>
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
              <Typography>All Code Challenges completed - you're almost done with Tier II!</Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
                </Button>
            </Paper>
          )
        }
      </Paper>
    );
  }
}

export default withStyles(styles)(SectionFour);
