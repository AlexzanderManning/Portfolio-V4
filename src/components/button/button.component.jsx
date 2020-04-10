import React from "react";

import styles from './button-styles.module.scss';

const button = ({XL, large, medium, small, ...props}) => {
  console.log(props);
  return <a className={`${styles.btn} ${styles.btn__animate} ${props.utilityClasses} ${styles.size} ${XL ? styles.btn__xl : ''}`} href={props.href}>{props.children}</a>;
};

export default button;
