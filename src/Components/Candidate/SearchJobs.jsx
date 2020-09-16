import React, { Component } from 'react';
import HeaderAll from '../CommonComp/HeaderAll';
class SearchJobs extends Component {
  render() {
    return (
      <div>
        <HeaderAll isCandidate={true}></HeaderAll>
        Search Jobs
      </div>
    );
  }
}

export default SearchJobs