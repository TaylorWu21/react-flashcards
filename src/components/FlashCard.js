import React from 'react';
import { Card, Header, Button, Form } from 'semantic-ui-react'

const styles = {
  deleteButton: { padding: '5px', cursor: 'pointer' },
  cardContent: { cursor: 'pointer' },
  formPadding: { padding: '10px' },
  formButtons: { margin: '5px' },
}

class FlashCard extends React.Component {
  state = { editing: false, front: '', back: '' }

  componentDidMount() {
    const { front, back } = this.props;
    this.setState({ front, back });
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  handleChange = (e) => {
    const { target: { value, id } } = e;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { front, back } = this.state;
    const { id, updateCard } = this.props;
    updateCard(front, back, id);
    this.toggleEdit();
  }

  render() {
    const { front, back, flipped, id, flipCard, deleteCard } = this.props;

    if(this.state.editing) {
      return(
        <Card>
          <Form onSubmit={this.handleSubmit} style={styles.formPadding}>
            <Card.Content>
              <Form.Field>
                <label>Front</label>
                <input 
                  id='front'
                  placeholder='Front'
                  value={this.state.front}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Back</label>
                <input 
                  id='back'
                  placeholder='Back'
                  value={this.state.back}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Card.Content>
            <Card.Content extra>
              <Button style={styles.formButtons} primary>Update</Button>
              <Button style={styles.formButtons} type='button' onClick={this.toggleEdit} color='orange'>Cancel</Button>
            </Card.Content>
          </Form>
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