import React from 'react'
import Link from 'gatsby-link'
import Captioned from '../../components/Captioned'
import CaptionedSmall from '../../components/captionedsmall'


const UIC = ({ data }) => (
  <div>

    <h1>UIC College of Architecture, Design and the Arts </h1>
    <p>What do you do when you have a very small team and a tight budget? For me that meant wearing many hats. Luckily I already had a pretty extensive background as a project manager and dev, so I was able to do that well. And when we were able to bring in more staff and student workers, I helped train them in order to increase team resiliancy and managed all student works involved in web development. </p>
    <Captioned image={data.refactor.childImageSharp.sizes}  desc="I managed all web projects using Trello" />

    <p>My main goal here was to bring all the sites here into the mobile web. Some of the sites (Art and Art History, Theatre and Music) had a new design that had been partially implemented but they were not responsive. I refactored them and also did extensive usability improvements and staff training on the Drupal backend.</p>
    <Captioned image={data.aah.childImageSharp.sizes}  desc="Mobile view of responsive refactor for Art and Art History" />

    <p>I also worked with Design and Architecture professors to turn their designs into web designs for complete rehaul of the Architecture site which I built from scratch.</p>
    <Captioned image={data.desktop.childImageSharp.sizes}  desc="The desktop view of the Architecture site" />
    <Captioned image={data.tablet.childImageSharp.sizes}  desc="The tablet view of the Architecture site" />
    <CaptionedSmall image={data.mobile.childImageSharp.resolutions}  desc="The mobile view of the Architecture site" />







  </div>
)


export const query = graphql`
  query uicQuery {
    desktop:file(relativePath: { eq: "pages/portfolio/uic/desktop.png" }) {
      ...imageFragment
    }
    mobile:file(relativePath: { eq: "pages/portfolio/uic/mobile.png" }) {
      ...imageFragmentSmall
    }

    tablet:file(relativePath: { eq: "pages/portfolio/uic/tablet.png" }) {
      ...imageFragment
    }
    refactor:file(relativePath: { eq: "pages/portfolio/uic/refactor.png" }) {
      ...imageFragment
    }
    aah:file(relativePath: { eq: "pages/portfolio/uic/aah.png" }) {
      ...imageFragment
    }







  }
`;


export default UIC
