import React from 'react'
import Link from 'gatsby-link'
import Captioned from '../../components/captioned'


const Curlsbot = ({ data }) => (
  <div>

    <h1>Curlsbot</h1>
    <p>Curlsbot was originally just a side project built in Glitch as a chatbot, but I've slowly turned it into a website.</p>
    <p>The bot was a Facebook Messenger bot that people could message with hair product ingredient lists and it would analyze them. I wrote an <a href="https://code.likeagirl.io/dont-let-perfectionism-kill-your-side-projects-dcc67c75218">article about my experience building the bot for <em>Code Like A Girl</em></a></p>
    <Captioned image={data.messenger.childImageSharp.sizes}  desc="Writing the responses for the bot and giving it personality was one of the most fun parts of the project" />
    <p>I loved how the bot allowed me to interact with the users personally and talk to them about different features they wanted. I grew to over 300 users even though I kept it in testing mode. But I realized the experience would be better on a website. So I migrated it over to a GatsbyJS site.</p>
    <Captioned image={data.home.childImageSharp.sizes}  desc="Users can now just copy and paste lists into the website for analysis" />

    <p>The site now has articles, a quiz, and the original ingredients analyzer, and I keep adding new info and tools every month.</p>




  </div>
)

export const query = graphql`
  query curlsbotQuery {
    home:file(relativePath: { eq: "pages/portfolio/curlsbot/curlsbothome.png" }) {
      ...imageFragment
    }

    messenger:file(relativePath: { eq: "pages/portfolio/curlsbot/Messenger.png" }) {
      ...imageFragment
    }




  }
`;

export default Curlsbot
