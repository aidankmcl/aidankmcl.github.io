import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Project, TitledSection } from '../../components';

const workExperiences = [
  {
    title: 'Jayway',
    sub: 'Software Consultant',
    description: 'Worked on a 3D web tool used by millions to plan out custom furniture layouts for their homes.',
    image: 'furniture.png',
    link: 'jayway',
  },
  {
    title: 'Streamroot',
    sub: 'Dashboard Tech Lead',
    description: 'Led team working on dashboard used for configuring and monitoring video streaming products.',
    image: 'dashboard.jpg',
    link: 'streamroot',
  },
  {
    title: 'indico',
    sub: 'Software Developer',
    description: 'First employee working on marketing website and product dashboard.',
    image: 'indico.png',
    link: 'indico',
  },
];

const projects = [
  {
    title: '3D Art',
    sub: 'Made with Blender',
    description: 'I’ve been learning Blender in my spare time over the past couple of years.',
    image: 'pattern.png',
    link: 'blender',
  },
  {
    title: 'Space Raptor Pirates',
    sub: 'Unity VR Game',
    description: 'Hold on to your butts, you\'ll need to defend your spaceship from scaly bandits',
    image: 'srp.png',
    link: 'space-raptor-pirates',
  },
  {
    title: 'A Small Number',
    sub: 'Browser Game',
    description: 'Inspired by the survival genre and the show The 100, a collaboration with my brother.',
    image: 'a-small-number.png',
    link: 'a-small-number',
  },
  {
    title: 'Trivia Game',
    sub: 'Browser Game',
    description: 'Created as part of the interview process for Jayway, a clone of Who Wants to Be a Millionaire.',
    image: 'quiz.png',
    link: 'quiz',
  },
  {
    title: 'Attack of the Blocks',
    sub: 'Unity VR Game',
    description: 'Created a VR version of 3D Tetris at the MIT Reality Virtually hackathon.',
    image: 'attack-of-the-blocks.png',
    link: 'attack-of-the-blocks',
  },
];

export const Experience = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          absolutePath: { regex: "/images/work/" }
        }
      ) {
        edges {
          node {
            name
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 60)
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <TitledSection title="Work" className="mt-5">
        <div className="row">
          {workExperiences.map(({ image, link, ...props }) => {
            const imageData = data.allFile.edges
              .find(({ node: { name, extension } }) => name + '.' + extension === image);
            
            const imageFluid = imageData ? imageData.node.childImageSharp.gatsbyImageData : undefined;

            return (
              <div key={props.title} className="col-12 col-lg-6 mt-2 mb-4">
                <Link to={link} style={{ textDecoration: 'none' }}>
                  <Project image={imageFluid} {...props} />
                </Link>
              </div>
            );
          })}
        </div>
      </TitledSection>

      <TitledSection title="Projects" className="mt-5">
        <div className="row">
          {projects.map(({ image, link, ...props }) => {
            const imageData = data.allFile.edges
              .find(({ node: { name, extension } }) => name + '.' + extension === image);
          
            const imageFluid = imageData ? imageData.node.childImageSharp.gatsbyImageData : undefined;
            
            return (
              <div key={props.title} className="col-12 col-lg-6 mt-2 mb-4">
                <Link to={link} style={{ textDecoration: 'none' }}>
                  <Project image={imageFluid} {...props} />
                </Link>
              </div>
            );
          })}
        </div>
      </TitledSection>
    </>
  )
};
