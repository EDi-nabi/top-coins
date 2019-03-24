import React from 'react';
import ContainerDimensions from 'react-container-dimensions';

import styles from './Liquidity.module.css';
import Echart from './echart/Echart';
import TauChart from './tauchart/TauChart';

const liquidity = (props) => {
  return (
    <div className={ styles.Liquidity }>
      <h1>Liquidity</h1>
      <div className={ styles.container }>
        <ContainerDimensions>
          { props.charts === 'taucharts' ? <TauChart /> : <Echart /> }
        </ContainerDimensions>
      </div>
    </div>
  );
}

export default liquidity;
