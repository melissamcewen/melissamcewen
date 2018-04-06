import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Portfolio from '../../components/Portfolio'



const About = ({ data }) => (
  <div>
    <h1>Portfolio</h1>
      <Portfolio image={data.desktop.childImageSharp.sizes}  desc="Lifewtr" link="/portfolio/lifewtr" />


  </div>
)


export const imageFragment = graphql`
fragment portfolioFragment on File {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;


export const query = graphql`
  query portfolioQuery {


    desktop:file(relativePath: { eq: "pages/portfolio/lifewtr/desktop.png" }) {
      ...portfolioFragment
    }



  }
`;


export default About

