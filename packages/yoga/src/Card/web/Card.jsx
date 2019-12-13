import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div(
  ({
    theme: {
      yoga: {
        components: { card },
      },
    },
  }) => `
    padding: 
      ${card.padding.top}px 
      ${card.padding.right}px 
      ${card.padding.bottom}px 
      ${card.padding.left}px;

    border-radius: ${card.radii}px;
    background-color: ${card.backgroundColor};
    box-shadow: ${card.elevation};
`,
);

const Card = ({ ...rest }) => <CardStyled {...rest} />;

Card.displayName = 'Card';

export default Card;