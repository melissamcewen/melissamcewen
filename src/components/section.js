import React from "react"
import styles from "./section.module.scss"


import line from './images/line.gif'; 


export default ({ children }) =>
  <div>
    <img src={line} alt="line" className={styles.line} />

    {children}
  </div>