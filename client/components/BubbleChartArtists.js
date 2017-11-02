import React from 'react';
import makeChart from '../d3Scripts';
import makeTreeMap from '../d3ScriptsTreeMap';

/*///
 COMPONENT
*////
class Main extends React.Component {

  componentDidMount() {
    //makeChart();
    makeTreeMap();
  }

  render() {
    return (
      <div>
        <p className="chart-type">Bubble Chart</p>
        <svg width="1200" height="1200" textAnchor="middle" />
      </div>
    );
  }
}

export default Main;
