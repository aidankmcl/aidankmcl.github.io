import { defineConfig, toEscapedSelector as getSelector } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";

import { colors } from "../ui/constants";

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
  rules: [
    [
      /^w-(\w+)$/,
      ([_, fraction]) => {
        let sizes: Record<string, string> = {
          full: "100%",
          "100": "100%",
          "75": "75%",
          "50": "50%",
          half: "50%",
          quarter: "25%",
          "25": "25%",
        };

        return {
          width: `${sizes[fraction]}`,
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
              cursor: pointer;
              border-width: 2px;
              border-color: ${colors.purple};
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
