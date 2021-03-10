import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 1.25rem;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const EmbedVideo = ({ link, title }) => (
  <Container>
    <Video title={title} src={link} frameborder="0" allowfullscreen />
  </Container>
);
