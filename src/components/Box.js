import React from "react";
import styled from 'styled-components';

import { Colors } from '../utilities';

const Container = styled.div`
  background: white;
  padding: 1rem;
  outline: 3px solid ${({ color }) => color || Colors.purple};
  border-left: ${({ leftpad, color }) => leftpad ? '2rem solid ' + (color || Colors.purple) : ''};

  ${({ shadow }) => shadow && `
    transition: all 0.15s ease-out;
    box-shadow: 8px 8px 0px 0px ${Colors.purple};
    -webkit-box-shadow: 8px 8px 0px 0px ${Colors.purple};
    -moz-box-shadow: 8px 8px 0px 0px ${Colors.purple};

    &:hover {
      box-shadow: 0px 0px 0px 6px ${Colors.purple};
      -webkit-box-shadow: 0px 0px 0px 6px ${Colors.purple};
      -moz-box-shadow: 0px 0px 0px 6px ${Colors.purple};
    }
  `}
`;

export const Box = ({ color, leftpad, shadow, children, ...props }) => (
  <Container color={color} leftpad={leftpad} shadow={shadow} {...props}>
    {children}
  </Container>
)