import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout, EmbedVideo } from '../components';

const AttackOfTheBlocks = () => {
  return (
    <ArticleLayout>
      <StaticImage
        alt="3D Tetris in virtual reality"
        src="../images/projects/attack-of-the-blocks/attack-of-the-blocks.png"
      />

      <div className="mt-3 mt-lg-5">
        <h1>Quiz Game</h1>

        <a
          className="d-inline-block mb-3"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aidankmcl/A-tech-of-the-Blocks"
        >
          Github Repo Link
        </a>

        <p>
          The <a target="_blank" rel="noreferrer" href="https://realityvirtuallyhack.com/">Reality Virtually</a> hackathon at the MIT Media Lab is the only hackathon I've been to that's focused solely on XR (augmented/virtual/mixed reality) and I was fortunate enough to be part of the first run in 2016. I worked on a team of three and our goal was VR Tetris with an elemental spin where blocks interact with each other after being placed. In the end we ran out of time before digging into the elements but it was fun to try Tetris in a new medium! The video below shows the prototype interaction that I worked on during the hackathon.
        </p>

        <EmbedVideo title="3D Tetris in virtual reality" link="https://drive.google.com/file/d/1KeWh0NwnSKMIC6C959Y6CzBtk3pwfmGw/preview" />
      </div>
    </ArticleLayout>
  )
};

export default AttackOfTheBlocks;
