import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react'
import ProjectCard from './ProjectCard.js'

export default class ProjectCardList extends Component {

  render() {
    const { projects = [] } = this.props
    return (
        <Card.Group stackable >
         {projects.map((project, index) => {
          return <ProjectCard profile={project} key={index} />
         })}
         </Card.Group>
      
    )
  }
}
