import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Captioned from '../../components/captioned'


const lifewtr = ({ data }) => (
  <div>

    <h1>LIFEWTR</h1>
    <p>I did much of the design operations for this responsive Wordpress site, which we launched on a pretty tight deadline for the Super Bowl in 2017 and then had regular phases of new product launches. </p>
      <Captioned image={data.desktop.childImageSharp.sizes}  desc="Product module for an artist bottle" />
      <Captioned image={data.mobile.childImageSharp.sizes}  desc="The mobile version" />

    <p>We chose to implement Style Guide Driven Development because I knew the launches of new bottles would have a tighter budget than the original Super Bowl release. So it was useful to create a standardized set of components that could be "remixed" for future product launches. We used KSS in our front end code to turn them into an automatically updated "living" Style Guide.</p>
     <Captioned image={data.workflow.childImageSharp.sizes}  desc="Gulp generating the style guide with KSS" />
    <p>I worked with UX to work out the technical details of animations included on the site's user interface. We started using Principle for this, which was really useful in bridging the gap between design and dev. In the past most designers had resorted to just describing the animations in the spec and devs having to guess how they really looked, which often lead to many revisions. This way we were able to prototype together to figure out exactly what we needed before we tried to implement it.</p>
          <Captioned image={data.styleguide.childImageSharp.sizes}  desc="Our KSS-generated living styleguide" />

    <p>We also had a pretty limited QA budget so I implemented Visual Regression Testing using BackstopJS, which took pictures of all the components and compared them to previous versions to both catch errors and help document the process.</p>
    <p>I worked with the Tech Lead to write stories and organize them into sprints in Jira. The three other developers and I reviewed each others pull requests and coordinated deployment through Travis both to our own staging servers and onto production, which was a client server. </p>

    <p>Towards the end of my time on the project I trained staff to administer what I'd built, documented the technical details of the site in Confluence, and also worked to improve the sites performance with techniques like "lazy load" since there hadn't been much attention paid to that in the beginning. I think that was my biggest lesson here, that even with all our CDNs and other fancy infrastructure, we needed to pay more attention to performance. Since then I've learned a lot about this and make it a priority for clients.</p>


  </div>
)





export const query = graphql`
  query imagesQuery {
    workflow:file(relativePath: { eq: "pages/portfolio/lifewtr/gulp.png" }) {
      ...imageFragment
    }

    desktop:file(relativePath: { eq: "pages/portfolio/lifewtr/desktop.png" }) {
      ...imageFragment
    }


    styleguide:file(relativePath: { eq: "pages/portfolio/lifewtr/styleguide.png" }) {
      ...imageFragment
    }

    mobile:file(relativePath: { eq: "pages/portfolio/lifewtr/mobile-bottle.png" }) {
      ...imageFragment
    }


  }
`;

export default lifewtr

