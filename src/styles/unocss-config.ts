import fs from "node:fs";
import { resolve } from "node:path";

import { defineConfig, toEscapedSelector as getSelector } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";

import { colors } from "../ui/constants";

const squiggleData = fs.readFileSync(resolve(__dirname, "../assets/images/graphics/pattern.png"));
const squiggleB64 = "data:image/png;base64," + squiggleData.toString("base64");

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWebFonts({
      provider: "google",
      // default provider
      fonts: {
        subhead: {
          name: "Josefin Sans",
          weights: [300, 400, 500, 600],
        },
        header: "Yeseva One",
      },
    }),
    presetUno(),
  ],
  theme: {
    colors,
  },
  shortcuts: {
    "header-text": "text-purple f-s-0 font-header",
    "subhead-text": "f-s-1 font-subhead text-darkPurple fw-400",
    "strong-text": "",
    "body-text": "text-darkPurple f-s-2 lg:f-s-3 font-subhead fw-300",
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        @screen lt-lg {
          html, body {
            font-size: 12px;
          }
        }

        h1, h2 {
          --uno: header-text;
        }

        h3, h4, h5, h6 {
          --uno: subhead-text f-s-2 text-gray m-b-3;
        }

        ul li, p {
          --uno: body-text;
        }

        p:not(:last-child) {
          --uno: m-b-6;
        }

        strong, a {
          --uno: text-purple fw-400;
        }

        hr {
          --uno: b-t-2 b-purple;
        }

        .markdown {
          ul {
            list-style: circle;
            --uno: p-l-5 m-b-6;
          }
  
          a {
            --uno: underline;
          }
          
          img {
            max-height: 90vh;
            --uno: object-contain m-b-6;
          }
        }

        /*
        * Based on: https://codepen.io/kootoopas/pen/kGPoaB
        * Twitter: @kootoopas
        * Using: https://www.toptal.com/designers/subtlepatterns/memphis-mini-pattern/
        */

        @keyframes bg-scrolling-reverse {
          100% {
            background-position: 400px 400px;
          }
        }

        @keyframes bg-scrolling {
          0% {
            background-position: 400px 400px;
          }
        }
        /* Main styles */
        .squiggle-loader {
          text-align: center;
          background: url(${squiggleB64}) repeat 0 0;
          animation: bg-scrolling-reverse 8s infinite;
          animation-timing-function: linear;
        }
      `,
    },
  ],
  rules: [
    [
      /^w-(\w+)$/,
      ([_, fraction]) => {
        let sizes: Record<string, string> = {
          "full": "100%",
          "100": "100%",
          "75": "75%",
          "50": "50%",
          "half": "50%",
          "quarter": "25%",
          "25": "25%",
        };

        return {
          "width": `${sizes[fraction]}`
        };
      },
    ],
    [
      /^f-s-(\d+)$/,
      ([_, scale]) => {
        const scales = [3, 2, 1.75, 1.4, 1.2];
        return {
          "font-size": `${scales[Number(scale)]}rem`,
          "line-height": 1.15,
        };
      },
    ],
    [
      /^card-?(.+)?$/,
      ([_, scale], { rawSelector }) => {
        const sel = getSelector(rawSelector);
        const size = scale === "l" ? 16 : 8;
        return `
            ${sel} {
              --uno: cursor-pointer b-2 b-purple;
              margin: ${size}px;
              box-shadow: ${size}px ${size}px 0px 0px ${colors.purple};
              transition: all 0.1s linear;
            }

            ${sel}:hover {
              box-shadow: 0px 0px 0px ${size / 2}px ${colors.purple};
            }
          `;
      },
    ],
  ],
});
