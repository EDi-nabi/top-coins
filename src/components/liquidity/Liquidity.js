import React, { Component } from 'react';
import ContainerDimensions from 'react-container-dimensions';

import styles from './Liquidity.module.css';
import Chart from './chart/Chart';

class Liquidity extends Component {
  render() {
		return (
      <div className={ styles.Liquidity }>
        <h1>Overview</h1>
        <div className={ styles.container }>
          <ContainerDimensions>
            <Chart />
          </ContainerDimensions>
        </div>
      </div>
    );
  }
}

export default Liquidity;
