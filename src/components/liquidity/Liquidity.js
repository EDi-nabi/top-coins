import React from 'react';
import ContainerDimensions from 'react-container-dimensions';

import styles from './Liquidity.module.css';
import Chart from './chart/Chart';

const liquidity = (props) => {
  return (
    <div className={ styles.Liquidity }>
      <h1>Liquidity</h1>
      <div className={ styles.container }>
        <ContainerDimensions>
          <Chart />
        </ContainerDimensions>
      </div>
    </div>
  );
}

export default liquidity;
