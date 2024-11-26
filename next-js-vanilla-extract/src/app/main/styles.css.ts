import { sprinkles } from "@/components/system/design/sprinkles.css";
import { theme } from "@/components/system/design/theme.css";

import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
  color: theme.common.thumbnail,
  "@media": {
    "screen and (min-width: 768px)": {
      color: theme.common.sub,
    },
  },
});

export const box = sprinkles({
  display: "inline-block",
  color: "red",
  zIndex: 1,
});
