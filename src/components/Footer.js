import React from 'react';
import {Container, Image, List, Segment } from 'semantic-ui-react';

const Footer = props => {
  return(
    <div class="footer">
      <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
          <Container textAlign='center'>
            <Image src='https://hakanbaykara.com/movies/movieapp.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Hakkımızda
              </List.Item>
              <List.Item as='a' href='#'>
                İletişim
              </List.Item>
            </List>
          </Container>
        </Segment>
    </div>
  )
}

export default Footer;