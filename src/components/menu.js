import React from "react"
import SocialLinks from "./social-links"
import Button from "./button"



const Menu = () => (
        <SocialLinks>
          <Button url="https://twitter.com/melissamcewen" color="#9b6c64">Twitter</Button>
          <Button url="https://github.com/melissamcewen" color="#b69889">Github</Button>
           <Button url="https://www.instagram.com/melissamcewen/" color="#969768">Instagram</Button>
          <Button url="https://medium.com/@melissamcewen" color="#ac88a9">Medium</Button>
        </SocialLinks>
)

export default Menu