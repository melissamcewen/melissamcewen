import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Portfolio from '../../components/Portfolio'
import TextPortfolio from '../../components/textportfolio'




const About = ({ data }) => (
  <div>
    <h1>Portfolio</h1>
      <Portfolio image={data.curlsbot.childImageSharp.sizes}  title="Curlsbot (2018)" link="/portfolio/curlsbot" desc="React, Bootstrap, GraphQL, CSS Modules, Express, Facebook Messenger API, Chatbots, Mocha" />

      <TextPortfolio link="https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/" title="GatsbyJS Docs (2018)">I contribute to GatsbyJS documentation. GatsbyJS is a very fast React.js based static site generator. This site and many of my other sites were built on it. I use its GraphQL and CSS Modules capabilities extensively as well.</TextPortfolio>

      <TextPortfolio link="http://www.mypetjumpingspider.com/" title="My Pet Jumping Spider (2018)" color="#ac88a9">This is a personal passion project of mine. For a long time I had a git repositiory with info on keeping pet jumping spiders. People who weren't technical had trouble accessing it so I made it into a GatsbyJS site. It is not the prettiest site (I used ReactStrap, a React implementation of Bootstrap), but users tell me it is very useful. It's also a playground I use for testing GatsbyJS docs I write.</TextPortfolio>

      <Portfolio image={data.lifewtr.childImageSharp.sizes}  title="Lifewtr (2017)" link="/portfolio/lifewtr" desc="Design Ops, Project Management, Scrum, Wordpress, Gulp, PhantomJS" />
      <Portfolio image={data.corona.childImageSharp.sizes}  title="Corona (2016)" link="/portfolio/corona" desc="Design Ops, Scrum, Meteor, PhantomJS, Blaze" />
      <Portfolio image={data.uic.childImageSharp.sizes}  title="UIC College of Architecture, Design and the Arts (2015)" link="/portfolio/uic" desc="Drupal, Project Management, DevOps" />


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

