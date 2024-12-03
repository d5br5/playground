import { sprinkles } from "@/components/system/design/sprinkles.css";
import { theme } from "@/components/system/design/theme.css";
import { typographyTokens } from "@/components/system/design/typo-token";

import { style } from "@vanilla-extract/css";
import classNames from "classnames";

export const container = style({
  padding: 10,
  color: theme.common.thumbnail,
});

export const box = classNames(
  sprinkles({
    display: "inline-block",
  }),
  typographyTokens.btn1.semiBold
);
