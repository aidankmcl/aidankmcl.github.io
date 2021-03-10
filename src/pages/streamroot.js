import * as React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import { ArticleLayout } from '../components';

const Streamroot = () => {
  const headerImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "work/dashboard.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 80)
        }
      }
    }
  `);

  return (
    <ArticleLayout>
      <GatsbyImage alt="streamroot analytics dashboard" style={{ overflow: 'visible' }} image={headerImage.file.childImageSharp.gatsbyImageData} />

      <div className="mt-3 mt-lg-5">
        <h1>Streamroot</h1>

        <p>
          At Streamroot I worked as the tech lead of the company's analytics dashboard team. We developed a web app which was used both internally and externally to monitor and configure usage of the company's video streaming products.
        </p>

        <p>
          Our dashboard was the primary interaction point for customers to understand the value of the underlying products as well as diagnose potential issues, so it was critical that we validate the accuracy of all data visualizations as well as confirm that all configuration tools worked in case a client needed to alter parameters of their integrations.
        </p>

        <p>
          When reflecting on my time at Streamroot, two major projects stand out to me: rewriting the dashboard and writing a gateway to be the public face of the internal backend API.
        </p>

        <h2>
          The Dashboard Rewrite
        </h2>

        <p>
          During my onboarding process with the existing dashboard I was told about its history as a project being passed between interns for years and that it was expected that a rewrite was imminent. Despite this series of handoffs, it was clear that talented developers had been working on various sections of the code. However, the lack of continuity manifested in handling certain problems in disjointed ways across the codebase, making it difficult and time-consuming to ensure that modifications in one area of the code didn't have unexpected negative consequences elsewhere. On top of this, it had been anounced at the start of the year that Angular 1 was entering maintenance mode and migration was encouraged.
        </p>

        <p>
          When it came to deciding how to move forward, I surveyed the frontend ecosystem and arrived at choosing React + TypeScript for the UI. This was based on both what I felt I could support with my experience and what I perceived to be strong, growing communities at the time when considering library support as well as finding talent later on. So it began - an excellent intern and I collaborated with the product team on specifications and mock ups for the future dashboard while creating the foundation of the app based on the existing dashboard. Then we stepped through implementation of each of the pages as designs were completed.
        </p>

        <p>
          This project was a huge learning experience for me, from developing the foundation of a large codebase to mentoring to the ongoing work of cultivating the developer experience of a growing team. It was a bit of a trial by fire and I certainly learned about estimation and buffer time for the unexpected. Ultimately we were late with the release and had plenty of bugs to iron out so we were very thankful that the old dashboard was available in the meantime, but I'm so proud of the work we did and we got great feedback from the rest of the company once it was released.
        </p>

        <h2>
          Creating a Public Gateway
        </h2>

        <p>
          During my time at Streamroot, their backend was comprised of several microservices (mostly written in Golang) orchestrated by Kubernetes. For the most part, I worked primarily on an inherited service focused on supporting the frontend: various entities needing CRUD operations, calls to external services, etc. Since most of the functionality we added on the frontend required very minor changes to this medium-sized service, I did not feel an urgent need to rework it and opted instead to address technical debt gradually with the team. That said, as the wider company backend evolved over time, the positioning of this service grew unwieldy since other services relied on rigid parts of it and the brittleness of the system was highlighted. This ultimately was a small piece of a larger, multi-team puzzle around the organization of concerns in the backend services.
        </p>

        <p>
          This is where I was asked to help rework the backend by breaking the dashboard backend service down into its component parts which would be converted into focused microservices. We aimed to write these new services such that updates in one of the core services (such as the shape of the User entity) would require minimal to no updates in other services. To handle this dissolution without complicating API interactions, we created a gateway that could combine calls to various underlying services and preserve the outward simplicity. Additionally, this gateway would handle authentication and the rest of the services would no longer be publicly accessible. So I needed to organize the following in collaboration with other teams:
        </p>

        <ul>
          <li>Creating a handful of microservices to replace the functionality of the existing dashboard service.</li>
          <li>Replacing the old authentication system of sharing code and secrets between services with a new auth service that the gateway would use.</li>
          <li>Creating a gateway with endpoints for all of the underlying services as well as recreating the functionalities provided by the old dashboard service.</li>
          <li>Learn enough Golang to be effective.</li>
        </ul>

        <p>
          A note on the last point: while an advantage of microservice architecture is language agnosticism and different teams can use the languages/frameworks that make sense for them, we reorganized the ownership of services during this process to more cleanly separate frontend and backend teams.
        </p>

        <p>
          On top of all this, I had already planned my departure with management before this large backend project was planned, so my time would be limited to a few months and I was needed to ensure feature parity with the existing dashboard backend service. We worked very hard for those months and I ended up staying a bit longer than expected but in the end we managed to release the new backend and it was the most I ever gave to a project.
        </p>
      </div>
    </ArticleLayout>
  )
}

export default Streamroot;
