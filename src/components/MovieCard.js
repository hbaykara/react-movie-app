import React from "react";
import { Card, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const extra = (movie, deleteMovie) => {
 return (
 <div className="ui two buttons">
    <Button color='violet' animated as={Link} to={`/movie/${movie._id}`}>
      <Button.Content visible>Düzenle</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
    <Button color='purple' animated="vertical" onClick={() => deleteMovie(movie._id)}>
      <Button.Content hidden>Sil</Button.Content>
      <Button.Content visible>
        <Icon name="trash" />
      </Button.Content>
    </Button>
  </div>
 );
};

const MovieCard = ({ movie, deleteMovie }) => (
  <Grid.Column>
    <Card>
      <Card image={movie.cover} header={movie.title} extra={extra(movie, deleteMovie)}/>
    </Card>
  </Grid.Column>
);

export default MovieCard;
