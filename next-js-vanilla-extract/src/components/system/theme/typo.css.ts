import { createGlobalTheme } from "@vanilla-extract/css";
import { precomputeValues } from "@capsizecss/vanilla-extract";
import colors from "tailwindcss/colors";

import { Breakpoint } from "./utils";
import { themeVars } from "./theme.css";

const grid = 4;
const px = (value: string | number) => `${value}px`;

const fontMetrics = {
  brand: {
    capHeight: 669,
    ascent: 1026,
    descent: -432,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  heading: {
    capHeight: 700,
    ascent: 992,
    descent: -310,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  body: {
    capHeight: 1443,
    ascent: 1950,
    descent: -494,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  code: {
    capHeight: 700,
    ascent: 1060,
    descent: -320,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

const tailwindPalette = {
  white: "#fff",
  black: "#0e0e10",
  red: colors.red["500"],
  yellow: colors.yellow["300"],
  green50: colors.emerald["50"],
  pink900: colors.fuchsia["900"],
};

const calculateTypographyStyles = (
  definition: Record<Breakpoint, { fontSize: number; rows: number }>,
  type: keyof typeof fontMetrics
) => {
  const mobile = precomputeValues({
    fontSize: definition.mobile.fontSize,
    leading: definition.mobile.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  const tablet = precomputeValues({
    fontSize: definition.tablet.fontSize,
    leading: definition.tablet.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  const desktop = precomputeValues({
    fontSize: definition.desktop.fontSize,
    leading: definition.desktop.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  return {
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      capHeightTrim: mobile.capHeightTrim,
      baselineTrim: mobile.baselineTrim,
    },
    tablet: {
      fontSize: tablet.fontSize,
      lineHeight: tablet.lineHeight,
      capHeightTrim: tablet.capHeightTrim,
      baselineTrim: tablet.baselineTrim,
    },
    desktop: {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
      capHeightTrim: desktop.capHeightTrim,
      baselineTrim: desktop.baselineTrim,
    },
  };
};

export const vars = createGlobalTheme(":root", {
  fonts: {
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',
  },
  grid: px(grid),
  spacing: {
    none: "0",
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(960),
    xlarge: px(1120),
    xxlarge: px(1350),
  },
  heading: {
    h1: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 36,
          rows: 12,
        },
        tablet: {
          fontSize: 52,
          rows: 15,
        },
        desktop: {
          fontSize: 52,
          rows: 15,
        },
      },
      "heading"
    ),
    h2: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 28,
          rows: 10,
        },
        tablet: {
          fontSize: 38,
          rows: 12,
        },
        desktop: {
          fontSize: 38,
          rows: 12,
        },
      },
      "heading"
    ),
    h3: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 24,
          rows: 8,
        },
        tablet: {
          fontSize: 30,
          rows: 10,
        },
        desktop: {
          fontSize: 30,
          rows: 10,
        },
      },
      "heading"
    ),
    h4: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 22,
          rows: 8,
        },
        tablet: {
          fontSize: 22,
          rows: 9,
        },
        desktop: {
          fontSize: 22,
          rows: 9,
        },
      },
      "heading"
    ),
  },
  text: {
    standard: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 18,
          rows: 9,
        },
        tablet: {
          fontSize: 20,
          rows: 10,
        },
        desktop: {
          fontSize: 20,
          rows: 10,
        },
      },
      "body"
    ),
    code: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 13,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 7,
        },
        desktop: {
          fontSize: 14,
          rows: 7,
        },
      },
      "body"
    ),
    small: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 16,
          rows: 8,
        },
        tablet: {
          fontSize: 16,
          rows: 8,
        },
        desktop: {
          fontSize: 16,
          rows: 8,
        },
      },
      "body"
    ),
    xsmall: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 15,
          rows: 7,
        },
        tablet: {
          fontSize: 15,
          rows: 7,
        },
        desktop: {
          fontSize: 15,
          rows: 7,
        },
      },
      "body"
    ),
  },
  weight: {
    regular: "400",
    strong: "700",
  },
  theme: themeVars,
  palette: tailwindPalette,
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },
    radius: {
      small: px(2 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: "9999px",
    },
  },
});
