import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components';

import { Box, Tag, TitledSection } from '../../components';
import { Colors } from '../../utilities';

const ProfileImageContainer = styled.div`
  .gatsby-image-wrapper {
    img {
      width: 100%;
      max-width: 250px;
      max-height: 250px;
      border-radius: 100%;
      border: 3px solid white;
      box-shadow: 1rem 1rem 0px 5px ${Colors.purple};
      -webkit-box-shadow: 1rem 1rem 0px 5px ${Colors.purple};
      -moz-box-shadow: 1rem 1rem 0px 5px ${Colors.purple};
    }
  }

  .gatsby-image-wrapper::after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;
    z-index: -1;
    top: -15px;
    left: -15px;
    background: ${Colors.gray};
  }
`;

const skillColors = {
  current: Colors.green,
  previous: Colors.blue,
  hobby: Colors.purple
}

const skills = [
  { text: 'JS/TypeScript', type: 'current' },
  { text: 'HTML/CSS', type: 'current' },
  { text: 'React (& Tooling)', type: 'current' },
  { text: 'nodejs', type: 'current' },
  { text: 'Design (Figma/Photoshop/+)', type: 'current' },
  { text: 'Wordpress', type: 'current' },
  { text: 'MongoDB', type: 'current' },
  { text: 'PostgreSQL', type: 'current' },

  { text: 'Kubernetes', type: 'previous' },
  { text: 'Python', type: 'previous' },
  { text: 'Angular', type: 'previous' },
  { text: 'D3.js', type: 'previous' },
  { text: 'Three.js', type: 'previous' },
  
  { text: 'Blender', type: 'hobby' },
  { text: 'Unity', type: 'hobby' },
  { text: 'VR', type: 'hobby' },
  { text: 'A-Frame', type: 'hobby' },
  { text: 'Vue  ', type: 'hobby' },
];

export const Home = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me/b&w.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 80, height: 300, width: 300)
        }
      }
    }
  `);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-6 col-sm-4 col-lg-3">
            <ProfileImageContainer>
              <GatsbyImage alt="Aidan McLaughlin" style={{ overflow: 'visible' }} image={data.file.childImageSharp.gatsbyImageData} />
            </ProfileImageContainer>
          </div>
          <div className="col-8 mt-5 col-sm-5 mt-sm-3 offset-sm-1 col-lg-4 offset-lg-0 ml-lg-5">
            <h1>Aidan<br/>McLaughlin</h1>
            <p>
              Fullstack developer interested in game development, AR/VR and 3D modeling.
            </p>
          </div>
        </div>
      </div>

      <TitledSection title="About Me" className="mt-5">
        <Box>
          <p className="mb-0">
            Hi! I'm Aidan and I’m a software engineer interested in working on applications focused on interaction-led understanding. Outside of work, I’m very excited about VR and have been learning a bit of Unity to create experiences. Aside from programming, I enjoy traveling, design, video games, coffee and running!
          </p>
        </Box>
      </TitledSection>

      <TitledSection title="Skills" className="mt-5">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2">
            <Tag text="Current" className="mb-3 mr-0" legend color={skillColors.current} />
            <Tag text="Previous" className="mb-3 mr-0" legend color={skillColors.previous} />
            <Tag text="Hobby" className="mb-4 mr-0" legend color={skillColors.hobby} />
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            {skills.map(({ text, type }) => (
              <Tag className="mb-3 mr-3" key={text} text={text} color={skillColors[type]} />
            ))}
          </div>
        </div>
      </TitledSection>
    </>
  )
};
