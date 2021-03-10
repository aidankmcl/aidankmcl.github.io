import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { ArticleLayout } from '../components';
import demoGIF from '../images/projects/quiz-game/quiz-demo.gif';
import resultsGIF from '../images/projects/quiz-game/results.gif';

const QuizGame = () => {
  return (
    <ArticleLayout>
      <StaticImage alt="Quiz game screenshot" style={{ overflow: 'visible' }} src="../images/projects/quiz-game/quiz.png" />

      <div className="mt-3 mt-lg-5">
        <h1>Quiz Game</h1>

        <a
          className="d-inline-block mb-3"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aidankmcl/who-wants-to-be-a-millionaire"
        >
          Github Repo Link
        </a>

        <p>
          I worked on this for a coding challenge and like how the design turned out! The prompt was that the game have powerups like Who Wants to be a Millionaire that can only be used once and a results page after the quiz.
        </p>

        <img className="w-100 mb-4" alt="demo of playing through the quiz" src={demoGIF} />

        <p>
          Above is a slice of gameplay for answering questions and below is the UI for the results page.
        </p>

        <img className="w-100" alt="scrolling through the results page" src={resultsGIF} />

      </div>
    </ArticleLayout>
  )
};

export default QuizGame;
