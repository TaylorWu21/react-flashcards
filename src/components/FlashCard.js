import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react'

import FlashForm from './FlashForm';

const styles = {
  cursorPointer: { cursor: 'pointer' },
  formPadding: { padding: '10px' },
}

class FlashCard extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    const { 
      card: { front, back, flipped, id, isCorrect }, 
      flipCard, 
      deleteCard, 
      updateCard,
      gotRight,
      gotWrong
    } = this.props;

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
      <Card color={ isCorrect === null ? null : (isCorrect ? 'green' : 'red') }>
        <Card.Description>
          <Grid columns={2}>
            <Grid.Column verticalAlign='middle'>
              <Icon 
                size='large' 
                name='checkmark'
                color='green'
                style={styles.cursorPointer}
                onClick={ () => gotRight(id) }
              />
              <Icon 
                size='large' 
                name='ban' 
                color='red'
                style={styles.cursorPointer}
                onClick={ () => gotWrong(id) }
              />
            </Grid.Column>
            <Grid.Column>
              <div style={{float: 'right'}}>
                <Icon 
                  size='large' 
                  name='trash'
                  style={styles.cursorPointer} 
                  onClick={ () => deleteCard(id) }
                />
              </div>
            </Grid.Column>
          </Grid>
        </Card.Description>
        <Card.Content 
          onClick={ () => flipCard(id)} 
          style={styles.cursorPointer}
        >
          <Card.Header>
            { flipped ? back : front }
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              { !flipped ? 
                <Icon name='question circle' color='blue' /> 
              : 
                <Icon name='exclamation circle' color='teal' /> 
              }
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