import React from "react"
import styles from "./index.module.scss"

import Header from "../components/header"
import SocialLinks from "../components/social-links"
import Social from "../components/social"
import Container from "../components/container"
import Section from "../components/section"
import Button from "../components/button"


import flowers from './images/flowers.png'; 
import robots from './images/robots.png'; 
import counter from './images/count.gif'; 




export default () =>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <img src={flowers} alt="flowers" className={styles.flowers} />
    <div className={styles.pixelBorder}>
      <Header>
        <h1>Melissa McEwen</h1>
        <p>I am a writer based in Chicago, IL. I cover a wide variety of topics from farming to fashion. My writing takes the form of blog posts, software, and more traditional articles.  </p>
        <Button url="mailto:mgmcewen@gmail.com" color="#997166">Email me!</Button>

        <p>Follow me</p>

        <SocialLinks>
          <Button url="https://twitter.com/melissamcewen" color="#9b6c64">Twitter</Button>
          <Button url="https://github.com/melissamcewen" color="#b69889">Github</Button>
           <Button url="https://www.instagram.com/melissamcewen/" color="#969768">Instagram</Button>
          <Button url="https://medium.com/@melissamcewen" color="#ac88a9">Medium</Button>
        </SocialLinks>
    </Header>

    <Container>


      <Section>
        <p>A selection of clips</p>
          <ul>
            <li>
              <a href="https://work.qz.com/1140305/outsourcing-coders-should-fear-what-happened-to-the-journalism-industry/">Coders should be afraid of what happened to the journalism industry- Quartz</a>
            </li>
            <li><a href="http://fooditor.com/everybody-korean-mom-kimchi-pop/">Everybody Has a Korean Mom at Kimchi Pop- Fooditor</a></li>
            <li>
              <a href="http://chicagoist.com/2014/05/23/looking_for_leghorn_why_arent_herit.php">Looking For Leghorn: Why Aren't Heritage Chickens On The Table? - Chicagoist</a>
            </li>
            <li>
              <a href="http://www.npr.org/sections/thesalt/2013/04/15/177362556/how-swedish-malort-became-chicagos-mascot-bitter-drink">How Swedish Malort Became Chicago's Mascot Bitter Drink - NPR</a>
            </li>
          </ul>
        </Section> 
        <Section>
          <p>I've been making software since 2000, ranging from large government websites to smaller apps. These are my current projects:</p>
          <ul>
            <li><a href="http://www.curlsbot.com">Curlsbot</a></li>
            <li><a href="https://www.mypetjumpingspider.com">My Pet Jumping Spider</a></li>
            <li>Coming Soon- Content For Developers</li>

          </ul>


        </Section>


      </Container>
    <img src={counter} alt="counter"  />

    </div>





  </div>