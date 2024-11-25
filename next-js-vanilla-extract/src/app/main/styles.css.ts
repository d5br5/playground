import { sprinkles } from "@/components/system/styles/sprinkles.css";
import { theme } from "@/components/system/theme/theme.css";

import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
  color: theme.common.thumbnail,
});

export const box = sprinkles({
  display: "inline-block",
  color: "red",
  zIndex: 1,
});
