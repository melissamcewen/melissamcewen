import React from "react"
import styles from "./header.module.scss"
//import "./header.module.sass"
//require("./header.scss")

export default ({ children }) =>
  <div className={styles.user}>
    {children}
  </div>