import React, { Component } from 'react';
import { Container, Header, Segment, Divider, Grid } from 'semantic-ui-react'

import FlashForm from './components/FlashForm';
import FlashCardList from './components/FlashCardList';
import Score from './components/Score';

class App extends Component {
  state = { flashcards: [], id: 0, right: 0, wrong: 0 };

  addFlashCard = (front, back) => {
    const card = { front, back, flipped: false, id: this.state.id, isCorrect: null };
    this.setState({ flashcards: [...this.state.flashcards, card], id: this.state.id + 1 });
  }

  flipCard = (id) => {
    const flashcards = this.state.flashcards.map( card => {
      if(card.id === id)
        return { ...card, flipped: !card.flipped };
      return card;
    });
    this.setState({ flashcards });
  }

  deleteCard = (id) => {
    const flashcards = this.state.flashcards.filter( card => {
      return card.id !== id;
    });
    this.setState({ flashcards });
  }

  updateCard = (front, back, id) => {
    const flashcards = this.state.flashcards.map( card => {
      if(card.id === id)
        return { front, back, flipped: false, id }
      return card
    });
    this.setState({ flashcards });
  }

  gotRight = (id) => {
    const flashcards = this.state.flashcards.map( card => {
      if(card.id ===id)
        return { ...card, isCorrect: true }
      return card;
    });
    this.setState({ flashcards, right: ++this.state.right });
  }

  gotWrong = (id) => {
    const flashcards = this.state.flashcards.map( card => {
      if(card.id ===id)
        return { ...card, isCorrect: false }
      return card;
    });
    this.setState({ flashcards, wrong: ++this.state.wrong });
  }

  render() {
    return (
      <Grid columns={4}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={10}>
          {/*<Container text>*/}
            <Header as='h2' textAlign='center'>Flash Cards</Header>
            <Segment>
              <FlashForm addFlashCard={this.addFlashCard} updateCard ={this.updateCard} />

              <Divider section />

              <FlashCardList 
                flashcards={this.state.flashcards} 
                flipCard={this.flipCard} 
                deleteCard={this.deleteCard}
                updateCard ={this.updateCard}
                gotRight={this.gotRight}
                gotWrong={this.gotWrong}
              />
            </Segment>
          {/*</Container>*/}
        </Grid.Column>
        <Grid.Column width={2} floated='left'>
          <Container textAlign='left'>
            <Header as='h2'>Score</Header>
            <Score right={this.state.right} wrong={this.state.wrong} />
          </Container>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
