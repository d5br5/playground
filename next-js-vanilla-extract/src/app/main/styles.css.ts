import { sprinkles } from "@/components/system/styles/sprinkles.css";
import { themeVars } from "@/components/system/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
  color: themeVars.common.thumbnail,
});

export const box = sprinkles({
  display: "inline-block",
  color: "red",
  zIndex: 1,
});
