import React from "react";
import styles from './goalsProgressBar.module.css'

export const GoalsProgressBar = ({ percentageValue, colorHexValue = '', textValue }) => {

  const Childdiv = {
    height: '4px',
    width: `${percentageValue}%`,
    backgroundColor: colorHexValue,
    borderRadius: 40,
    textAlign: 'right'
  }

  return (
    <div className={styles.mainProgressBarContainer}>
      <div className={styles.progressOuterView}>
        <div style={Childdiv} />
      </div>

      <p className={styles.percentageValue}>{percentageValue}%</p>
      <p className={styles.textValue}>{textValue}</p>
    </div>
  );
};
