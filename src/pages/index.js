import React from "react"
import styles from "./index.module.css"

import Header from "../components/header"
import SocialLinks from "../components/social-links"
import Social from "../components/social"
import Container from "../components/container"
import Section from "../components/section"


export default () =>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <Header>
      <h1>Melissa McEwen</h1>
      <p>is a writer and software developer based on in Chicago.  </p>
      <a href="mailto:mgmcewen@gmail.com">Email me!</a>

      <p>This website is inspired by my original Expages sites from 2000 and <a href="http://brutalistwebsites.com/">the "Brutalism" design trend</a></p>

      <SocialLinks>
        <Social url="https://twitter.com/melissamcewen" title="Twitter"/>
        <Social url="https://github.com/melissamcewen" title="GitHub"/>
        <Social url="https://www.instagram.com/melissamcewen/" title="Instagram" />
        <Social url="https://medium.com/@melissamcewen" title="Medium" />

      </SocialLinks>
    </Header>

    <Container>
      <Section>
        <p>I've been creating fun and useful Chatbots for over a year, as a contributor, designer, and coder</p>
        <ul>
          <li>Internal Slackbot: this internal slackbot was for a company I worked for and you could ask it for directory information or about meeting rooms</li>
          <li>Rose @ The Cosmopolitan: <a href="http://www.travelandleisure.com/hotels-resorts/cosmopolitan-las-vegas">a "sassy" hotel concierge SMS bot </a></li>
          <li><a href="http://curlsbot.com/">Curlsbot</a> (in testing): a cute FB messenger that analyzes ingredients in hair care products</li>
          <li>Salon Slackbot: a slackbot to help salons find the best products for their clients and manage their inventory (unreleased)</li>


        </ul>

      </Section>

      <Section>
        <p>I've been blogging since 1999, my first blogs were on Expages and Livejournal. In college I majored in Agriculture and I've written about food, food-policy, farming, and restaurants since. I was also <a href="http://chicagoist.com/author/melissa%20mcewen">Chicagoist.com's Food and Drink editor</a> for over a year, and have also written for NPR and  Fooditor. I have also done some software writing, mainly on Medium.com.  </p>
        <p>A selection of clips</p>
          <ul>
            <li><a href="http://fooditor.com/everybody-korean-mom-kimchi-pop/">Everybody Has a Korean Mom at Kimchi Pop</a></li>
            <li>
              <a href="http://chicagoist.com/2014/05/23/looking_for_leghorn_why_arent_herit.php">Looking For Leghorn: Why Aren't Heritage Chickens On The Table?</a>
            </li>
            <li>
              <a href="http://www.npr.org/sections/thesalt/2013/04/15/177362556/how-swedish-malort-became-chicagos-mascot-bitter-drink">How Swedish Malort Became Chicago's Mascot Bitter Drink</a>
            </li>
          </ul>
        </Section> 
        <Section>
          <p>I've been making websites since 2000 or so with a wide variety of projects in education, advertising, and government. Here's a small selection of projects I've worked on:</p>
          <ul>
            <li><a href="http://arch.uic.edu/">Architecture at UIC</a></li>
            <li><a href="https://www.lifewtr.com/">LIFEWTR</a></li>
            <li><a href="https://www.ama-assn.org/">The American Medical Association</a></li>

          </ul>
          <p>I specialize in great software and workflow design, and can work across the stack.</p>
          <p>Some of my skills include:</p>
          <ul>
            <li>Node.js</li>
            <li>Meteor</li>
            <li>Continuous integration</li>
            <li>Test-driven development</li>
            <li>Front-end frameworks: React, Blaze, Angular</li>
            <li>Static sites: Gatsby, Jekyll</li>
            <li>CMSs: Drupal, Wordpress</li>
          </ul>

        </Section>

        <Section>
         <p> I've been managing projects as a manager or tech lead since 2010. I have extensive experience with project management tools like Basecamp, Jira, Slack, Trello, and TeamworkPM. </p>

        </Section>

        <Section>
          <p>I'm also a moderator of many online communities, mainly FB groups these days (I'm a "facebook power moderator) of 1000+ members. I can consult with you on managing these groups and how useful they can be for businesses and causes. </p>

        </Section>


    </Container>




  </div>