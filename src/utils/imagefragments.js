export const imageFragment = graphql`
fragment imageFragment on File {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;


export const portfolioFragment = graphql`
fragment portfolioFragment on File {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;