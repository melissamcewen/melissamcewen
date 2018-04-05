import React from 'react'
import Link from 'gatsby-link'


const Corona = () => (
  <div>

    <h1>Corona Navidad</h1>
    <p>This was a special Christms interactive advent calendar we built on Corona's website, which is Meteor. I'd never worked with Meteor before and we didn't have any devs who knew it, so I took some online courses and dove in.</p>
    <p>The design was constantly in flux here because it was such a tight deadline. And there was a great deal of interactivity ranging from a card game (which I programmed) to videos to a special Pandora playlist. </p>
    <p>A lot of the files were huge too so I had to use a lot of different tools to improve load times. This was my first time implementing tricks like "lazy loading" where the whole page didn't load at once, it loaded as you scrolled. And also having fallback content for mobile devices.</p>
    <p>I did all the technical aspects of project management here as well, writing and organizing stories in Jira. We had only a few hours of the QA departments time, so I relied pretty heavily on visual regression testing with PhantomJS to catch any errors. </p>

  </div>
)

export default Corona
