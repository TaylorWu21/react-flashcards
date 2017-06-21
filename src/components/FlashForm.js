import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const styles = {
  formMargin: { marginBottom: '30px' }
}

class FlashForm extends React.Component {
  state = { front: '', back: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFlashCard(this.state.front, this.state.back);
    this.setState({ front: '', back: '' });
  }

  render() {
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
      </Form>
    );
  }
}

export default FlashForm;