import React from "react";

import styles from "./button-styles.module.scss";

const button = ({ XL, large, medium, small, inverted, ...props }) => {
  console.log(props);
  return (
    <a
      target={props.target}
      className={`
      ${styles.btn} 
      ${styles.btn__animate} 
      ${props.utilityClasses} 
      ${styles.size} 
      ${XL ? styles.btn__xl : ""} 
      ${medium ? styles.btn__medium : ""} 
      ${inverted ? styles.inverted : ""}
      `}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default button;
