import React from "react"
import Img from 'gatsby-image'
import styles from "./captioned.module.scss"
import Link from 'gatsby-link'



const Portfolio = props => (
    <div className={styles.captioned}>
      <Link to={props.link} >
         <Img sizes={props.image}  style={{ width: "100%" }} alt={props.desc} />
         <div className={styles.caption}>
    
              {props.desc}
          
         </div>   
       </Link>
    </div>

)



export default Portfolio

