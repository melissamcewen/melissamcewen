import React from "react"
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styles from "./textportfolio.module.scss"



const textPortfolio = props => (
  <div className={styles.textportfolio} style={{ color: props.color}} >
  <h2><a href={props.link} style={{ color: props.color}} target="new"> {props.title}</a></h2>

      {props.children}

  </div>
)



export default textPortfolio