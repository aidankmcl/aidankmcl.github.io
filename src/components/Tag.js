import React from "react";
import styled from 'styled-components';

import { Colors } from '../utilities';
import { Box } from './Box';

const Text = styled.span`
  font-weight: bold;
  vertical-align: middle;
  color: #444;
`;

export const Tag = ({ color, legend, text, className }) => (
  <Box
    color={color || Colors.purple}
    leftpad={legend}
    className={`body-font ${className || ''}`}
    style={{
      padding: '0.3rem 0.5rem',
      display: !legend ? 'inline-block' : 'block',
      fontWeight: 400
    }}
  >
    <Text>{text}</Text>
  </Box>
);
