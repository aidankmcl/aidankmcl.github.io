import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout } from '../components';

const Indico = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="indico machine learning tools" src="../images/work/indico-usecases.png" />

      <div className="mt-3 mt-lg-5">
        <h1>indico</h1>

        <ul>
          <li>
            Developed visualizations so clients could interpret data gained from analyzing texts and images with indico’s machine learning tools.
          </li>

          <li>
            Iterated, tested and maintained marketing site and demos including strategic planning around updates (e.g. A/B testing).
          </li>

          <li>
            Wrote developer documentation for API usage as well as step-by-step guides for developing applications from scratch.
          </li>
        </ul>

        <p>
          I joined the indico team halfway through my time at Olin College as the startup's first hire. During my two years there we went through the Techstars accelerator, raised a $3M round of seed funding and grew from 4 in a dorm room to around 12 employees in a downtown Boston office. It was a whirlwind of a first full-time development job and I learned an incredible amount!
        </p>

        <p>
          My primary responsibilities were working on the client dashboard and maintaining the marketing website. I worked a bit with D3 for creating visualizations including an app that processed Twitter data to give you an overview of your feed's sentiment.
        </p>
      </div>
    </ArticleLayout>
  )
}

export default Indico;
