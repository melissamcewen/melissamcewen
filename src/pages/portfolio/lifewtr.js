import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


const lifewtr = ({ data }) => (
  <div>

    <h1>LIFEWTR</h1>
    <p>I did much of the design operations for this responsive Wordpress site, which we launched on a pretty tight deadline for the Super Bowl in 2017 and then had regular phases of new product launches. </p>
    <p>We chose to implement Style Guide Driven Development because I knew the reoccuring product launches would have a tighter budget than the original release. So it was useful to create a standardized set of components that could be "remixed" for future product launches. We used KSS in our front end code to turn them into an automatically updated "living" Style Guide.</p>
     <Img className="card-img-top" sizes={data.workflow.childImageSharp.sizes}  style={{ width: "100%" }} alt="Gulp generating the style guide with KSS" />
    <p>I worked with UX to work out the technical details of animations included on the site's user interface. We started using Principle for this, which was really useful in bridging the gap between design and dev. In the past most designers had resorted to just describing the animations in the spec and devs having to guess how they really looked, which often lead to many revisions. This way we were able to prototype together to figure out exactly what we needed before we tried to implement it.</p>
    <p>We also had a pretty limited QA budget so I implemented Visual Regression Testing using BackstopJS, which took pictures of all the components and compared them to previous versions to both catch errors and help document the process.</p>
    <p>I worked with the Tech Lead to write stories and organize them into sprints in Jira.</p>
    <p>The three other developers and I reviewed each others pull requests and coordinated deployment through Travis both to our own staging servers and onto production, which was a client server. </p>
    <p>Towards the end of my time on the project I trained staff to administer what I'd built, documented the technical details of the site in Confluence, and also worked to improve the sites performance with techniques like "lazy load" since there hadn't been much attention paid to that in the beginning. I think that was my biggest lesson here, that even with all our CDNs and other fancy infrastructure, we needed to pay more attention to performance. Since then I've learned a lot about this and make it a priority for clients.</p>


  </div>
)


export const imageFragment = graphql`
fragment imageFragment on File {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;


export const query = graphql`
  query imagesQuery {
    workflow:file(relativePath: { eq: "pages/portfolio/lifewtr/gulp.png" }) {
      ...imageFragment
    }


  }
`;

export default lifewtr

