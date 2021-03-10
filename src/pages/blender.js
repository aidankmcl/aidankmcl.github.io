import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import { ArticleLayout } from '../components';

const Blender = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="a selection of 3D art" style={{ overflow: 'visible' }} src="../images/projects/blender/overview.png" />

      <div className="mt-3 mt-lg-5">
        <h1>Blender Work</h1>

        <p>
          I've been following tutorials for quite some time and have made some scenes and models both for game projects as well as standalone renders.
        </p>
        
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/pattern.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="Using a pattern to imagine a futuristic power transfer system."
                    src="../images/projects/blender/pattern.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/husky.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="Dog tracks in the snow."
                    src="../images/projects/blender/husky.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/door.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A portal to a new year and hopefully some new luck!"
                    src="../images/projects/blender/door.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/enchanted.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A render of the first key door from Kingdom Hearts."
                    src="../images/projects/blender/enchanted.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/snow.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="An abandoned bunker found after a blizzard."
                    src="../images/projects/blender/snow.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/door-material.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A closeup on the procedural material used on the bunker door."
                    src="../images/projects/blender/door-material.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/swing.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A render of the tireswing I grew up with."
                    src="../images/projects/blender/swing.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/build.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A hammer striking hot metal at the forge."
                    src="../images/projects/blender/build.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/raptor.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A raptor model I made for my game project 'Space Raptor Pirates.'"
                    src="../images/projects/blender/raptor.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/frail.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="My mom's bathroom where I was once healed by shower steam after having sudden breathing trouble."
                    src="../images/projects/blender/frail.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/halo.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A tribute to Halo, one of my favorite game series."
                    src="../images/projects/blender/halo.png"
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <a href="./images/projects/blender/phone-screen.png">
                  <StaticImage
                    className="w-100"
                    width={400}
                    height={400}
                    alt="A camera pointing at a phone - an ongoing feedback loop."
                    src="../images/projects/blender/phone-screen.png"
                  />
                </a>
              </div>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>

      </div>
    </ArticleLayout>
  )
}

export default Blender;
