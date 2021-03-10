import * as React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';

import styled from 'styled-components';

import { Layout } from '../components';

import { Home, Experience, Contact } from '../components/homepage-sections';

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Section = styled.div`
  width: 100%;
  margin: 0 0 4rem;
  padding-top: 4rem;
`;

const IndexPage = ({ location }) => (
  <Layout target={location.state && location.state.target}>
    <main style={pageStyles}>
      <div className="scroll-anchor" id="home">
        <Section style={{ marginTop: 0, paddingTop: '8rem' }}>
          <Home />
        </Section>
      </div>

      <div className="scroll-anchor" id="experience">
        <Section>
          <Experience />
        </Section>
      </div>

      <div className="scroll-anchor" id="contact">
        <Section style={{ marginBottom: 0 }}>
          <Contact />
        </Section>
      </div>
    </main>
  </Layout>
);

export default IndexPage
