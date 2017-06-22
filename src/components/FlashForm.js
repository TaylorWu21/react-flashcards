import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const styles = {
  formMargin: { marginBottom: '30px' }
}

class FlashForm extends React.Component {
  state = { front: '', back: '' };

  componentDidMount() {
    if(this.props.card) {
      const { card: { front, back } } = this.props
      this.setState({ front, back })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { front, back } = this.state;
    if(this.props.card) {
      this.props.updateCard(front, back, this.props.card.id)
      this.props.toggleEdit();
    } else {
      this.props.addFlashCard(front, back);
    }
    this.setState({ front: '', back: '' });
  }

  render() {
    const { toggleEdit, card } = this.props;

    return(
      <Form onSubmit={this.handleSubmit} style={styles.formMargin}>
        <Form.Field>
          <label>Front</label>
          <input 
            placeholder='Front' 
            value={this.state.front}
            onChange={ (e) => this.setState({ front: e.target.value }) } 
          />
        </Form.Field>
        <Form.Field>
          <label>Back</label>
          <input 
            placeholder='Back'
            value={this.state.back}
            onChange={ (e) => this.setState({ back: e.target.value }) }
          />
        </Form.Field>
        <Button type='submit' primary>Submit</Button>
        { card ? 
            <Button type='button' onClick={ () => toggleEdit() } color='orange'>Cancel</Button> 
          : 
            null 
        }
      </Form>
    );
  }
}

export default FlashForm;