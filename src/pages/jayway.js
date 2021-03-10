import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout } from '../components';
import plannerGif from '../images/work/planner-usage.gif';

const Jayway = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="furniture planning tool" style={{ overflow: 'visible' }} src="../images/work/furniture.png" />

      <div className="mt-3 mt-lg-5">
        <h1>Jayway</h1>

        <p>
          At Jayway I worked on a planner for visualizing combinations of furniture for the home. The project's focus was on storage solutions, so each combination involved a set of frames which could be customized with different doors, handles and legs. To give an accurate visualization, we used Babylon.js to display a variety of 3D models optimized for the web.
        </p>

        <p>
          In terms of the codebase structure, we used React for the UI and Redux for tracking selected products and their position on the wall in our 3D canvas. Our client had many specifications for how a product could be used due to legal and logistical constraints, so whenever new functionalities were added we needed to do rigorous testing to ensure that user flows throughout the app were not impacted. This presented a challenge because a number of products had unique rules that could create new conflicts with existing product rules. New functionality needed to be designed and implemented with an awareness of all the existing rules and we got regular feedback from our client to ensure that we were on the right track.
        </p>

        <img alt="creating a furniture layout in the planner" className="my-4 w-100" src={plannerGif} />

        <p>
          During my time at Jayway I worked with a few main features: adding the ability to start a new planner from scratch (rather than beginning with a pre-made configuration), working with a small team to add a brand new range of products to the planner, and adding the ability to customize handles per door rather than choosing one set for all doors. During my time there, aside from developing I became very familiar with the processing of 3D models including an internal tool used to define relationships between objects as well as working with our vendor to get models and textures looking good on our 3D canvas.
        </p>
      </div>
    </ArticleLayout>
  )
}

export default Jayway;
