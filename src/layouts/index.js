import React from 'react'
import Helmet from 'react-helmet'

import styles from './index.module.scss'
import PropTypes from 'prop-types'

import Menu from '../components/menu'


import allFlowers from './images/flowers.png'; 

import flowers from './images/flowers-1.png'; 
import flowersSmall from './images/flowers-2.png'; 

import counter from './images/count.gif'; 


export default class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
     <div>
           <Helmet
      title="Melissa McEwen"
      meta={[
        { name: 'description', content: 'Writer and tech operations' },
        { name: 'keywords', content: 'chicago, technology, writer, operations, design operations' },
      ]}
    />
       <img src={allFlowers} alt="flowers" className={styles.flowertop} />

       <div className={styles.layout}>


          <div className={styles.menu}>
              <img src={flowersSmall} alt="flowers" className={styles.flowers} />
              <div className={styles.pixelBorder}>
                        <Menu />
              </div>
          </div>
          <div className={styles.content}>
              <img src={flowers} alt="flowers" className={styles.flowers} />
              <div className={styles.pixelBorder}>
                {this.props.children()}
                <img src={counter} alt="counter"  />
              </div>
           </div>


        </div>
      </div>

    );
  }
}








