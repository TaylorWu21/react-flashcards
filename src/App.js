import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

import FlashForm from './components/FlashForm';
import FlashCardList from './components/FlashCardList';

class App extends Component {
  state = { flashcards: [], id: 0 };

  addFlashCard = (front, back) => {
    const card = { front, back, flipped: false, id: this.state.id };
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
    })

    this.setState({ flashcards });
  }

  render() {
    return (
      <Container text>
        <Header as='h2' textAlign='center'>Flash Cards</Header>
        <FlashForm addFlashCard={this.addFlashCard} updateCard ={this.updateCard} />
        <FlashCardList 
          flashcards={this.state.flashcards} 
          flipCard={this.flipCard} 
          deleteCard={this.deleteCard}
          updateCard ={this.updateCard}
        />
      </Container>
    );
  }
}

export default App;
