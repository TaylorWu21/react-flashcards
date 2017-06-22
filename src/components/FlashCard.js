import React from 'react';
import { Card, Header } from 'semantic-ui-react'

import FlashForm from './FlashForm';

const styles = {
  deleteButton: { padding: '5px', cursor: 'pointer' },
  cardContent: { cursor: 'pointer' },
  formPadding: { padding: '10px' },
}

class FlashCard extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    const { card: { front, back, flipped, id }, flipCard, deleteCard, updateCard } = this.props;

    if(this.state.editing) {
      return(
        <Card>
          <FlashForm 
            card={this.props.card} 
            updateCard ={updateCard}
            toggleEdit={this.toggleEdit}
          />
        </Card>
      );
    }
    return(
      <Card>
        <Card.Description>
          <Header 
            as='h4' 
            floated='right'
            onClick={ () => deleteCard(id) }
            style={styles.deleteButton}
          >
            X
          </Header>
        </Card.Description>
        <Card.Content 
          onClick={ () => flipCard(id)} 
          style={styles.cardContent}
        >
          <Card.Header>
            { flipped ? back : front }
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              { flipped ? 'Back' : 'Front' }
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <a onClick={this.toggleEdit}>Edit</a>
        </Card.Content>
      </Card>
    )
  }
}


export default FlashCard;