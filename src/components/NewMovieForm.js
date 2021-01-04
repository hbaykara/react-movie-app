import React, { Component } from 'react';
import { Button, Form, Image } from 'semantic-ui-react';
import InlineError from './InlineError';

class NewMovieForm extends Component {

  state = {
    moviename: '',
    cover: '',
    errors: {}
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    const errors = this.validate();
    this.setState({
      errors
    })
  }

  validate = () => {
    const errors = {}
    if(!this.state.moviename) errors.moviename = 'Bu kısım boş olamaz';
    if(!this.state.cover) errors.cover = 'Bu kısım boş olamaz';
    return errors;
  }

  render() {
    const {errors} = this.state;
    return(
      <div>
        <h2>Yeni Film</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.moviename}>
            <label>Film Adı</label>
            { errors.moviename && <InlineError message={errors.moviename} /> }
            <input 
              id="moviename"
              name="moviename"
              value={this.state.moviename} 
              onChange={this.handleChange} 
              placeholder='Film Adı' 
            />
          </Form.Field>
          <Form.Field error={!!errors.cover}>
            <label>Film Resmi</label>
            { errors.cover && <InlineError message={errors.cover} /> }
            <input 
              id="cover"
              name="cover"
              value={this.state.cover} 
              onChange={this.handleChange} 
              placeholder='Film Resmi' 
            />
          </Form.Field>
          <Image className="cover-image" src={this.state.cover} size='small' />
          <Button primary type='submit'>Gönder</Button>
        </Form>
      </div>
    )
  }
}

export default NewMovieForm;