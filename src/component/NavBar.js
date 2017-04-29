import React, { Component } from 'react';

import { Menu, Button, Container } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
     
      <Menu stackable inverted>
        <Container>
          <Menu.Item
            name='Project'
            active={activeItem === 'Project'}
            onClick={this.handleItemClick}
          >
            Project
          </Menu.Item>

          <Menu.Item
            name='Members'
            active={activeItem === 'Members'}
            onClick={this.handleItemClick}
          >
            Members
          </Menu.Item>
        </Container>
      </Menu>
      
    )
  }
}
