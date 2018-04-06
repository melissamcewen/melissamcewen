import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Button from "../components/button"
import SocialLinks from "../components/social-links"



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
    <p>Hi! I am a Chicago-based writer and tech consultant. </p>
    <p>My main interest in tech these days is Design Operations, which is an ideal fusion of my skills in web development, documentation, and project management. I love filling the gap between design dreams and the technical implementation. I work a lot with Styleguide Driven Development and Visual Regression Testing. I'm also really into static site generators like GatsbyJS. My "side projects" are writing documentation for open source software (like GatsbyJS), as  well as grading student projects in TDD (Test Driven Development), CSS/HTML, APIs, and React. </p> 
    <p>I like to write about everything that I'm interested in and I'm interested in a lot of things. Food, science, and tech are my main wheelhouses right now. I do everything from longform pieces for publications to content marketing for dev tools.</p>
    <p>This site is an update of a site design I first built in 2002 for fun when I was in high school. I found a copy on Web Archive and updated it for the modern web (the original was built with tables and image maps hehe). It's also kind of my playground for various technologies. Right now this is built with GatsbyJS powered by React, GraphQL, and CSS Modules. </p>
    <SocialLinks>
      <Button url="https://twitter.com/melissamcewen" color="#9b6c64">Twitter</Button>
      <Button url="https://github.com/melissamcewen" color="#b69889">Github</Button>
       <Button url="https://www.instagram.com/melissamcewen/" color="#969768">Instagram</Button>
      <Button url="https://medium.com/@melissamcewen" color="#ac88a9">Medium</Button>
    </SocialLinks>
    <Button url="mailto:mgmcewen@gmail.com" color="#997166">Email me!</Button>

  </div>
)

export default About

