import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout, EmbedVideo } from '../components';
import srp2DGif from '../images/projects/srp/srp-2D-demo.gif';

const SpaceRaptorPirates = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="some screenshots from Space Raptor Pirates" style={{ overflow: 'visible' }} src="../images/projects/srp/srp-overview.png" />

      <div className="mt-3 mt-lg-5">
        <h1>Space Raptor Pirates</h1>

        <p>
          I've had this game idea in the back of my mind for a long time: you're on a cargo ship and need to get from point A to point B while defending against pirates. I wanted the player to have advanced tools/abilities at their disposal and set the game in the distant future where space-faring is commonplace. Finally, for the raptor bit I've just always wanted to make a game with anthropomorphic dinosaurs and I figured it could add some flavor to the game.
        </p>

        <p>
          As of now, the game is an ongoing project manifested in three basic prototypes - one in 2D, one in 3D and another in Virtual Reality. I've added some screenshots and videos of the different versions below to give a feel for the idea!
        </p>

        <img alt="Space Raptor Pirates in 2D" className="my-4 w-100" src={srp2DGif} />

        <p>
          The 2D iteration is the first that I made, focusing on a core concept of having sectors that each control a different life support system on the ship. If the player isn't in the room, the enemies (represented by the placeholder triceratops) attack a console and lower the "health" of the sector. This sector health can be repaired and that life support system restored, e.g. if the power generation sector is taken offline, the lights would be dimmed aside from rotating red beacon light. Right now only the base navigation, fighting and repair mechanics are in place - with some exploration of multiplayer using sockets.io. Aside from the dinosaur characters and web page background, I made the graphics shown above in Figma.
        </p>

        <EmbedVideo title="Raptor walking around ship" link="https://drive.google.com/file/d/1XhXLH1FOnerHTpm_YEwZxACF-72TBxGU/preview" />

        <p>
          The next version is in VR and I was really excited to develop in the medium. I found free assets for a spaceship and gun online and made a raptor model in Blender that's featured in the video. In this prototype, the raptors move from waypoint to waypoint and the player can fend them off with the gun:
        </p>

        <EmbedVideo title="Sample of Space Raptor Pirates gameplay" link="https://drive.google.com/file/d/1KdqczTOTSQWPIM2Crbups93f19f0GCH4/preview" />

        <p>
          I'm excited to return to this version, however after working with it off and on for a while I felt I needed to step back and focus on the gameplay a bit. I started on a regular 3D version with the intention of workshopping the experience that would ultimately be built for VR. In this prototype, I developed a basic set of rules for automating enemy searching and worked on chasing when the player is seen.
        </p>

        <EmbedVideo title="Raptor chasing player" link="https://drive.google.com/file/d/1Jg1PsqL0AlefcpH57Pf5dz_TUooz1WFC/preview" />
      </div>
    </ArticleLayout>
  )
}

export default SpaceRaptorPirates;
