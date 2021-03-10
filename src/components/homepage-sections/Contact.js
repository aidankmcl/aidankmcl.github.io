import React from "react"
import styled from 'styled-components';

import { TitledSection } from '../../components';
import { Colors } from '../../utilities';

const Background = styled.div`
  padding: 2.5rem 0 5rem;
  background: ${Colors.purple};
`;

const Link = styled.a`
  font-family: 'Yeseva One';
  color: white;
  font-size: 1.6rem;
  display: inline-block;
  margin: 1rem 0;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Contact = (props) => (
  <Background>
    <TitledSection title="Contact" className="mt-5" color="white">
      <div className="row">
        <div className="col-12">
          <Link href="mailto:hi@aidan.works">hi@aidan.works</Link>
        </div>
        <div className="col-12">
          <Link target="_blank" rel="noreferrer" href="https://github.com/aidankmcl">Github</Link>
        </div>
        <div className="col-12">
          <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aidankmcl/">LinkedIn</Link>
        </div>
      </div>
    </TitledSection>
  </Background>
);
