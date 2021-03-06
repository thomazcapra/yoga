import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View`
  position: relative;
`;

const InactiveLine = styled.View(
  ({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
  width: 100%;
  height: 4px;

  position: absolute;
  top: 0;

  background-color: ${stepper.line.backgroundColor.inactive};
`,
);

const ActiveLine = styled.View(
  ({
    width,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
    position: absolute;
    top: 0;

    background-color: ${stepper.line.backgroundColor.active};
    width: ${width}%;
    height: 4px;
`,
);

const Line = ({ activeStep, totalSteps }) => (
  <Wrapper>
    <InactiveLine />
    <ActiveLine width={activeStep <= 0 ? 0 : (activeStep / totalSteps) * 100} />
  </Wrapper>
);

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
};

Line.defaultProps = {
  activeStep: 0,
  totalSteps: 0,
};

export default Line;
