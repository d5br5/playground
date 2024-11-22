import { assignVars, createThemeContract, style } from "@vanilla-extract/css";
import { darkMode } from "../system/styles/sprinkles.css";
import { vars } from "../system/theme/typo.css";

const themeVars = createThemeContract({
  toggleBrightness: null,
  toggleContent: null,
  focusRingColor: null,
});

const lightVars = assignVars(themeVars, {
  toggleBrightness: "0",
  toggleContent: '"☀️"',
  focusRingColor: vars.theme.common.sub,
});

const darkVars = assignVars(themeVars, {
  toggleBrightness: "10",
  toggleContent: '"🌙"',
  focusRingColor: vars.theme.common.sub,
});

export const root = style({
  outline: "none",
  fontSize: 24,
  height: 42,
  width: 42,
  vars: lightVars,
  ":focus-visible": {
    boxShadow: `0px 0px 0px 3px ${themeVars.focusRingColor}`,
  },
  "::before": {
    content: themeVars.toggleContent,
    filter: `contrast(0) brightness(${themeVars.toggleBrightness})`,
  },
  selectors: {
    [`.${darkMode} &`]: {
      vars: darkVars,
    },
  },
});
