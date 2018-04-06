import React from "react"
import Img from 'gatsby-image'
import styles from "./captionedsmall.module.scss"



const CaptionedSmall = props => (
  <div>
    <div className={styles.captionedsmall} >
       <Img resolutions={props.image} className={styles.captionedsmallimage} alt={props.desc} />
    </div>
    <div className={styles.captionsmalltext}>{props.desc}</div>


  </div>

)



export default CaptionedSmall

