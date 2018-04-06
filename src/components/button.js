import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"
import Link from 'gatsby-link'


class Button extends React.Component {

  render() {
      // Use gatsby-link for internal links, and <a> for others
      const internal = /^\/(?!\/)/.test(this.props.url);
      if (internal) {
        return  <Link to={this.props.url} style={{ color: this.props.color}} className={styles.button}>{this.props.children}</Link>
        ;
      }
      return <a href={this.props.url} style={{ color: this.props.color}} className={styles.button}>{this.props.children}</a>

    }
  }


Button.propTypes = {
  url: PropTypes.string,
}

export default Button

