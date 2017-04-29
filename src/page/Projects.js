import React, { Component } from 'react';

import { Container, Header, Icon } from 'semantic-ui-react'
import ProjectCardList from './../component/ProjectCardList.js'

export default class Projects extends Component {

  render() {
    const projects = [
        {
            title: 'King\'s Order',
            Members: {
                'Smart': {
                age: 22,
                working: "looking for jobs"
                }
            },
            year: 2017,
            tags: ["VR", "GAME"],
            github: 'www.github.com/smart2538'
        },
        {
            title: 'Title',
            Members: {
                'DOG': {
                age: 22,
                working: "looking for jobs"
                }
            },
            year: 2017,
            tags: ["VR", "GAME"],
            github: 'www.github.com/smart2538'
        }
    ]
    return (
        <Container>
            <Header as='h2' color='green'>
                <Icon name='student' />
                <Header.Content>
                Projects
                </Header.Content>
            </Header>
            <ProjectCardList projects={projects} />
        </Container>
      
    )
  }
}
