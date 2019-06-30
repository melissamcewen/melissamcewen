import React from 'react'
import Link from 'gatsby-link'
import Captioned from '../../components/captioned'


const Corona = ({ data }) => (
  <div>

    <h1>Corona Navidad</h1>
    <p>This was a special Christms interactive advent calendar we built on Corona's website, which is Meteor. I'd never worked with Meteor before and we didn't have any devs who knew it, so I took some online courses and dove in.</p>
    <Captioned image={data.locked.childImageSharp.sizes}  desc="Each date intially appeared locked with a few little clues about what the surprise would be. This is the desktop view." />
    <Captioned image={data.unlocked.childImageSharp.sizes}  desc="Once a gift was unlocked, you could press a button to get it. This is the mobile view of an unlocked gift." />
    <p>The design was constantly in flux here because it was such a tight deadline. And there was a great deal of interactivity ranging from a card game (which I programmed) to videos to a special Pandora playlist. </p>
    <Captioned image={data.cardgame.childImageSharp.sizes}  desc="The Loteria card game that opened up in a modal" />
    <p>A lot of the files were huge too so I had to use a lot of different tools to improve load times. This was my first time implementing tricks like "lazy loading" where the whole page didn't load at once, it loaded as you scrolled. And also having fallback content for mobile devices.</p>
    <Captioned image={data.site.childImageSharp.sizes}  desc="All content was also in both Spanish and English and you could toggle between languages in the header" />
    <p>I did all the technical aspects of project management here as well, writing and organizing stories in Jira. We had only a few hours of the QA departments time, so I relied pretty heavily on visual regression testing with using BackstopJs (powered by PhantomJS) to catch any errors. </p>
    <p>For the QA and for designer review, I developed some tools that would allow an easy toggle to simulate different days of advent calendar.</p> 
    <Captioned image={data.testing.childImageSharp.sizes}  desc="Testing tool for toggling dates" />



  </div>
)


export const query = graphql`
  query coronaQuery {
    locked:file(relativePath: { eq: "pages/portfolio/corona/locked.png" }) {
      ...imageFragment
    }

    unlocked:file(relativePath: { eq: "pages/portfolio/corona/unlocked.png" }) {
      ...imageFragment
    }

    cardgame:file(relativePath: { eq: "pages/portfolio/corona/cardgame.png" }) {
      ...imageFragment
    }

    testing:file(relativePath: { eq: "pages/portfolio/corona/testing.png" }) {
      ...imageFragment
    }

    site:file(relativePath: { eq: "pages/portfolio/corona/site.png" }) {
      ...imageFragment
    }






  }
`;


export default Corona
