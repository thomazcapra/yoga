import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Content from '../Card/Content';
import PlanCardContext from './PlanCardContext';

const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  height: 40px;
  margin: ${plan.title.margin.top}px 0 ${plan.title.margin.bottom}px;

  font-size: ${plan.title.font.size}px;
  font-weight: ${plan.title.font.weight};

  color: ${variant ? white : dark};
`}
`;

const Price = styled.Text`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  margin-top: ${plan.price.margin.top}px;

  font-size: ${plan.price.font.size}px;
  font-weight: ${plan.price.font.weight};
  color: ${variant ? white : dark};
  `}
`;
const Period = styled.Text`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  margin-bottom: ${plan.period.margin.bottom}px;

  font-size: ${plan.period.font.size}px;
  font-weight: ${plan.period.font.weight};
  color: ${variant ? white : dark};
  `}
`;

const PlanCardContent = ({ title, price, period }) => {
  const { variant } = useContext(PlanCardContext);

  return (
    <Content>
      {title && <Title variant={variant}>{title}</Title>}
      {price && <Price variant={variant}>{price}</Price>}
      {period && <Period variant={variant}>{period}</Period>}
    </Content>
  );
};

PlanCardContent.propTypes = {
  title: string.isRequired,
  price: string.isRequired,
  period: string.isRequired,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
