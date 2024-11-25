import { style } from "@vanilla-extract/css";

export const lightLabel = style({
  selectors: {
    [".dark &"]: {
      display: "none",
    },
  },
});

export const darkLabel = style({
  selectors: {
    [".light &"]: {
      display: "none",
    },
  },
});
