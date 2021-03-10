import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

import { Box } from './Box';
import { Colors, useWindowSize } from '../utilities';
import Mask from '../images/graphics/mask.svg';

const IMAGE_BREAKPOINT = 500;

const BackgroundImageHolder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const CornerImageHolder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
  outline: 3px solid ${Colors.purple};
  overflow: hidden;
`;

const textStyles = {
  textDecoration: 'none',
  position: 'relative',
  zIndex: 2
};

export const Project = ({ title, sub, description, image }) => {
  const { width } = useWindowSize();

  return (
    <Box shadow style={{ position: 'relative', height: '100%' }}>
      <div className="row">
        <div className="col-9 col-sm-10">
          <h3 style={{ ...textStyles, color: Colors.purple }}>{title}</h3>
        </div>
      </div>
      
      <div className="row">
        <div className="col-8">
          <h4 style={{ ...textStyles, color: Colors.gray }}>{sub}</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-8 col-sm-6 col-md-8">
          <p style={{ ...textStyles, margin: 0 }}>{description}</p>
        </div>
      </div>
      
      {(image && width > IMAGE_BREAKPOINT) && (
        <BackgroundImageHolder>
          <Mask style={{ position: 'absolute', height: '103.5%', right: 0, top: -3, zIndex: 1 }} />
          <GatsbyImage alt={title} style={{ position: 'absolute', height: '100%', minWidth: '300px', right: -3, top: 0, zIndex: 0 }} image={image} />
        </BackgroundImageHolder>
      )}

      {(image && width <= IMAGE_BREAKPOINT) && (
        <CornerImageHolder>
          <GatsbyImage alt={title} style={{ overflow: 'hidden', height: '100%' }} image={image} />
        </CornerImageHolder>
      )}
    </Box>
  );
};
