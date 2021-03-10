import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout } from '../components';

const ASmallNumber = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="A Small Number game UI" style={{ overflow: 'visible' }} src="../images/projects/a-small-number/a-small-number.png" />

      <div className="mt-3 mt-lg-5">
        <h1>A Small Number</h1>
        
        <a
          className="d-inline-block mb-3"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/boombador/a-small-number"
        >
          Github Repo Link
        </a>

        <p>
          My brother and I worked on this game after watching "The 100," a series about humans re-colonizing Earth after a nuclear apocalypse. The concept is that you choose what tasks people are allocated to over a day and balance resources with defending your settlement and scouting out more of the area.
        </p>

        <StaticImage alt="task allocation interface" src="../images/projects/a-small-number/resources.png" />

      </div>
    </ArticleLayout>
  )
}

export default ASmallNumber;
