import React from "react";

import styled from 'styled-components';

import { Colors } from "../utilities";

const InlineTitle = styled.h2`
  display: inline-block;
`;

const HR = styled.hr`
  margin: 1.4rem 0 0.6rem 0;
  border-width: 3px;
  border-color: ${({ color }) => color || Colors.purple};
`;

export const TitledSection = ({ title, children, color, className, ...props }) => (
  <div className={'container px-5' + (className || '')} style={{ color: color || Colors.purple }} {...props}>
    <div className="row mb-2 mt-4">
      <div className="col-auto">
        <InlineTitle>{title}</InlineTitle>
      </div>
      <div className="col pl-0"><HR color={color} /></div>
    </div>
    <div className="row" style={{ color: color || Colors.gray }}>
      <div className="col">
        {children}
      </div>  
    </div>
  </div>
);
