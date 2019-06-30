import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Button from "../components/button"
import SocialLinks from "../components/social-links"

import blinkie from './images/lissaunicorn_blinkie.gif'; 
import garden from './images/garden.gif'; 
import flower from './images/sis1.gif'; 


const About = () => (
  <div>
      <Helmet
      title="Melissa McEwen"
      meta={[
        { name: 'description', content: 'Writer and tech operations' },
        { name: 'keywords', content: 'chicago, technology, writer, operations, design operations' },
      ]}
    />
    <h1>Melissa McEwen</h1>
    <p>Hi! I am a Chicago-based writer and tech consultant. <img src={flower} alt="just a flower really"  />
</p>
    
    <p>I currently work at <a href="http://glitch.com">Glitch.com</a> as a solutions engineer. Glitch is a place to build webapps like this one (this site is hosted on Glitch!). I work with partners in education, media, tech, and entertainment. I help them use Glitch for everything from coding challenges to HTML5 games. I work on the amazing Business Development and Partnerships team. My specialties are APIs, API docs, automation, and integrations.</p>

    <p>I like to write about everything that I'm interested in and I'm interested in a lot of things. Food, science, and tech are my main wheelhouses right now. I do everything from longform pieces for publications to content marketing for dev tools.</p>
      <img src={garden} alt="original design from 2002"  style={{ display: "block", margin: "10px auto" }}/>

    <p>This site is an update of a site design I first built in 2002 for fun when I was in high school. I found a copy on Web Archive and updated it for the modern web (the original was built with tables and image maps hehe). It's also kind of my playground for various technologies. Right now this is built with GatsbyJS powered by React, GraphQL, and CSS Modules. </p>

    <img src={blinkie} alt="Blinkie"  style={{ display: "block" }}/>

    <SocialLinks>
      <Button url="https://twitter.com/melissamcewen" color="#9b6c64">Twitter</Button>
      <Button url="https://github.com/melissamcewen" color="#b69889">Github</Button>
      <Button url="https://www.instagram.com/melissamcewen/" color="#969768">Instagram</Button>
      <Button url="https://medium.com/@melissamcewen" color="#ac88a9">Medium</Button>
      <Button url="https://glitch.com/@MelissaMcEwen" color="#9b6c64">Glitch</Button>
      <Button url="https://dev.to/melissamcewen" color="#b69889">Dev.to</Button>

    </SocialLinks>
    <Button url="mailto:mgmcewen@gmail.com" color="#997166">Email me!</Button>

  </div>
)

export default About

