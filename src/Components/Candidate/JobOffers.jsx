import React, { Component } from 'react';
import HeaderAll from '../CommonComp/HeaderAll';
class JobOffers extends Component {
  render() {
    return (
      <div>
        <HeaderAll isCandidate={true}></HeaderAll>
        Job Offers
      </div>
    );
  }
}

export default JobOffers