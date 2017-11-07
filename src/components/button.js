import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"


const Button = props => (
    <a href={props.url} style={{ color: props.color}} className={styles.button}>{props.children}</a>

)

Button.propTypes = {
  url: PropTypes.string,
}

export default Button

