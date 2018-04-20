import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';


class View extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={SectionOne} />
          <Route path="/2" component={SectionTwo} />
          <Route path="/3" component={SectionThree} />
          <Route path="/4" component={SectionFour} />
        </div>
    )
  }
}

export default View;