import React from "react"
import Helmet from 'react-helmet'
import { Jumbotron, Button,ListGroup, ListGroupItem } from 'reactstrap';



export default () =>
<div >
    <Helmet
      title="Melissa McEwen"
      meta={[
        { name: 'description', content: 'Writer for and about software' },
        { name: 'keywords', content: 'software, marketing, architecture' },
      ]}
    />
  <Jumbotron>
    <h1 className="display-3">Melissa McEwen</h1>
    <p className="lead">Writer</p>
    <hr className="my-2" />
    <p>My specialty is writing for and about software. My work includes software architecture plans,  documentation, and marketing. I have over a decade of experience as a developer and project manager, as well as years of experience as a professional editor and writer.</p>
    <p className="lead">
          <Button color="primary" href="mailto:mgmcewen@gmail.com">Contact me</Button>
    </p>

  </Jumbotron>
  <div className="container">
      <ListGroup>
        <ListGroupItem><a href="https://medium.com/@melissamcewen">Medium</a></ListGroupItem>
        <ListGroupItem><a href="https://twitter.com/melissamcewen">Twitter</a></ListGroupItem>
        <ListGroupItem><a href="https://github.com/melissamcewen">Github</a></ListGroupItem>
      </ListGroup>
  </div>



</div>





