import React from "react"
import Img from 'gatsby-image'
import styles from "./captioned.module.scss"



const Captioned = props => (
    <div className={styles.captioned}>
       <Img sizes={props.image}  style={{ width: "100%" }} alt={props.desc} />
       <div className={styles.caption}>{props.desc}</div>
    </div>

)



export default Captioned

