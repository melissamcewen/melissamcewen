import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Portfolio from '../../components/Portfolio'
import TextPortfolio from '../../components/textportfolio'

import layout3 from './old/layout3.gif'; 
import layout4 from './old/layout4.gif'; 
import layout5 from './old/layout5.gif'; 




const About = ({ data }) => (
  <div>
    <h1>Portfolio</h1>
      <Portfolio image={data.curlsbot.childImageSharp.sizes}  title="Curlsbot (2018)" link="/portfolio/curlsbot" desc="React, Bootstrap, GraphQL, CSS Modules, Express, Facebook Messenger API, Chatbots, Mocha" />

      <TextPortfolio link="https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/" title="GatsbyJS Docs (2018)">I contribute to GatsbyJS documentation. GatsbyJS is a very fast React.js based static site generator. This site and many of my other sites were built on it. I use its GraphQL and CSS Modules capabilities extensively as well.</TextPortfolio>

      <TextPortfolio link="http://www.mypetjumpingspider.com/" title="My Pet Jumping Spider (2018)" color="#ac88a9">This is a personal passion project of mine. For a long time I had a git repositiory with info on keeping pet jumping spiders. People who weren't technical had trouble accessing it so I made it into a GatsbyJS site. It is not the prettiest site (I used ReactStrap, a React implementation of Bootstrap), but users tell me it is very useful. It's also a playground I use for testing GatsbyJS docs I write.</TextPortfolio>

      <Portfolio image={data.lifewtr.childImageSharp.sizes}  title="Lifewtr (2017)" link="/portfolio/lifewtr" desc="Design Ops, Project Management, Scrum, Wordpress, Gulp, PhantomJS" />
      <Portfolio image={data.corona.childImageSharp.sizes}  title="Corona (2016)" link="/portfolio/corona" desc="Design Ops, Scrum, Meteor, PhantomJS, Blaze" />

      <TextPortfolio title="The American Medical Association" color="#969768">Most of the work I did here was in operations: writing stories in Jira, implementing Test Driven Development and continuous integration. I think this is where my background on both the front and back end was really put to work!</TextPortfolio>

      <TextPortfolio title="Cook County" color="#b69889">This was a challenging Drupal 7 project where I did a lot of the front end architecture.</TextPortfolio>

      <Portfolio image={data.uic.childImageSharp.sizes}  title="UIC College of Architecture, Design and the Arts (2015)" link="/portfolio/uic" desc="Drupal, Project Management, DevOps" />


      <TextPortfolio title="Equivoice (2011-2014)" color="#ac88a9">I was a project manager for this Telecom company. It was great to get a view of this part of the stack. I became VMWare Data Center Virtualization Certified and also was the Project Manager for getting the company its Cisco Master Cloud Builder Specialization. I decided to go back into software because I felt a technical background would make me a better PM and software was the best place for me to get that. I wanted to improve my technical strengths so if I did want to become a software PM I would have a strong grasp of what producing applications is like.  </TextPortfolio>

      <TextPortfolio title="Columbia University (2010-2011)" color="#969768">I did A LOT of department websites here in Drupal 6. Some of them were still up as late as 2016. They weren't the most flashy or exciting sites, but they taught me a lot about building effective websites. </TextPortfolio>

      <TextPortfolio title="Others (Pre 2010)" color="#917b91">I've been making websites as a hobby since 2000, so I've made A LOT of websites. I probably don't remember all of them. The first professional one was for The Sustainable Agriculture & Agroecology Program at the University of Illinois. I've always been into pixel art. Here are a few I dug up:  

        <br /> 
        <img src={layout3} /><img src={layout4} /> <img src={layout5} />




      </TextPortfolio>



  </div>
)





export const query = graphql`
  query portfolioQuery {


    lifewtr:file(relativePath: { eq: "pages/portfolio/lifewtr/desktop.png" }) {
      ...portfolioFragment
    }

    corona:file(relativePath: { eq: "pages/portfolio/corona/site.png" }) {
      ...portfolioFragment
    }

    curlsbot:file(relativePath: { eq: "pages/portfolio/curlsbot/curlsbothome.png" }) {
      ...portfolioFragment
    }

    uic:file(relativePath: { eq: "pages/portfolio/uic/desktop.png" }) {
      ...portfolioFragment
    }



  }
`;


export default About

