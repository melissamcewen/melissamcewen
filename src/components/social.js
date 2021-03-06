import React from "react"
import PropTypes from "prop-types"


const Social = props => (
  <div>
    <a href={props.url}>{props.title}</a>
  </div>
)

Social.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default Social