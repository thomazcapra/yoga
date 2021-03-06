import React, { useState } from 'react';
import { View } from 'react-native';
import { string, func, oneOfType, number, bool, node } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const Group = styled.View(
  () => `
    align-self: center;
    position: relative;
    flex-direction: row;
  `,
);

const GrayLine = styled.View(
  ({
    theme: {
      yoga: {
        components: {
          radioGroup: {
            radii,
            border: { width: borderWidth, color: borderColor },
          },
        },
      },
    },
  }) => `
    position: absolute;
    height: 100%;
    border-radius: ${radii}px;
    border-width: ${borderWidth}px;
    border-color: ${borderColor};
  `,
);

const RadioGroup = ({ onChange, selectedValue, small, children, ...rest }) => {
  const [groupSize, setGroupSize] = useState(0);
  return (
    <RadioGroupContext.Provider
      value={{
        selectedValue,
        onChange,
        small,
        ...rest,
      }}
    >
      <View>
        <Group
          {...rest}
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => setGroupSize(width)}
        >
          <GrayLine style={{ width: groupSize }} />
          {children}
        </Group>
      </View>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  onChange: func,
  selectedValue: oneOfType([string, number]),
  small: bool,
  children: node,
};

RadioGroup.defaultProps = {
  onChange: () => {},
  selectedValue: '',
  small: false,
  children: null,
};

export default RadioGroup;
