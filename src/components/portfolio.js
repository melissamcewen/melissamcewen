import React from "react"
import Img from 'gatsby-image'
import styles from "./portfolio.module.scss"
import Link from 'gatsby-link'



class Portfolio extends React.Component {

  render() {
    return <div className={styles.captioned}>
      <Link to={this.props.link} >
         <Img sizes={this.props.image}  style={{ width: "100%" }} alt={this.props.desc} />
         <h2 className={styles.title}>
    
              {this.props.title}
          
         </h2> 

          <div className={styles.itemCaption}>
    
            {this.props.desc}
          
         </div> 

       </Link>
    </div>
    }
}




export default Portfolio

