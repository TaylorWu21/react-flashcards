import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';

const Score = ({ right, wrong }) => {
  const sum = right + wrong;
  const percentage = parseFloat((right / sum) * 100).toFixed(0);
  return(
    <Segment>
      Right: {right}
      <br />
      Wrong: {wrong}
      <Divider section />
      Percentage: { isNaN(percentage) ? null : (percentage + '%') } 
    </Segment>
  )
};

export default Score;