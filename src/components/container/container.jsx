import React from "react";
import styles from './container-styles.module.scss'

const container = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};

export default container;
