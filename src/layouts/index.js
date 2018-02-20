import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../components/nav'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';





export default class TemplateWrapper extends React.Component {




  render() {
    return (
      <div>
        <div className="container">
            {this.props.children()}
        </div>


      </div>
    );
  }
}


