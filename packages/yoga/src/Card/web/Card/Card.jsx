import React from 'react';
import styled from 'styled-components';
import { string, shape, oneOf, node } from 'prop-types';

import Text from '../../../Text';

const CardStyled = styled.section`
  ${({
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
`}
`;

const Ribbon = styled(Text.Tiny)`
  ${({
    variant,
    theme: {
      yoga: {
        components: { card },
        spacing,
        colors: { gray, [variant]: color = {}, white, dark },
      },
    },
  }) => `
  display: inline-block;
  top: ${card.padding.top}px;
  left: 0;

  margin-left: -${card.padding.left}px;
  margin-bottom: ${card.padding.bottom}px;

  padding: 
    ${spacing.xxsmall}px
    ${spacing.small}px
    ${spacing.xxsmall}px
    ${spacing.medium}px;
  
  border-top-right-radius: ${card.ribbon.radius}px;
  border-bottom-right-radius: ${card.ribbon.radius}px;

  background-color: ${variant ? color[3] : gray[1]};
  color: ${variant ? white : dark};
  `}
`;

const Card = ({ ribbon, children, ...rest }) => (
  <CardStyled {...rest}>
    {Object.keys(ribbon).length > 0 && (
      <Ribbon variant={ribbon.variant} as="span">
        {ribbon.text}
      </Ribbon>
    )}
    {children}
  </CardStyled>
);

Card.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the ribbon following the theme (primary, secondary, tertiary) */
  ribbon: shape({
    text: string,
    variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
  }),
  children: node,
};

Card.defaultProps = {
  ribbon: {},
  children: null,
};

Card.displayName = 'Card';

export default Card;
