import React from 'react';

import styles from './Spinner.module.css';

const spinner = () => {
  return (
    <div className={ styles.Wrapper }>
      <div className={ styles.Spinner }>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default spinner;
