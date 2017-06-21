import React from 'react';
import { Grid } from 'semantic-ui-react';

import FlashCard from './FlashCard';

const FlashCardList = ({ flashcards, flipCard, deleteCard, updateCard }) => {
  const cards = flashcards.map( card => {
    return (
      <Grid.Column key={card.id}>
        <FlashCard 
          {...card} 
          flipCard={flipCard} 
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      </Grid.Column>
    );
  });

  return(
    <Grid columns={3}>
      {cards}
    </Grid>
  );
}

export default FlashCardList;