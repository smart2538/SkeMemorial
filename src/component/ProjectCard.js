import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react'

import ImageURL from './../static/ProjectPic.JPG'

export default class ProjectCard extends Component {

  render() {
    const {profile = {}} = this.props;
    return (
      <Card>
        <Image src={ImageURL} />
        <Card.Content>
          <Card.Header>
            {profile.title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in {profile.year}
            </span>
          </Card.Meta>
          <Card.Description>
            {profile.tags}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={profile.github}>
            <Icon name='github' />
            {profile.github}
          </a>
        </Card.Content>
      </Card>
      
    )
  }
}
