import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  bg: {
    gnb: null,
    lnb: null,
    tradingView: null,
    balanceMyTable: null,
    modalMenu: null,
    table: null,
    BW: null,
    transBG: null,
    header: null,
    footer: null,
  },
  common: {
    main: null,
    sub: null,
    thumbnail: null,
    highlight: null,
    shadow: null,
  },
  primary: {
    main: null,
    hover: null,
    active: null,
    disabled: null,
  },
  danger: {
    main: null,
    hover: null,
    active: null,
    disabled: null,
  },
  success: {
    main: null,
    hover: null,
    active: null,
    disabled: null,
  },
  text: {
    primary: null,
    secondary: null,
    disabled: null,
    inverted: null,
  },
});

export const themeLight = createGlobalTheme("html.light", theme, {
  bg: {
    gnb: "#212938",
    lnb: "#212938",
    tradingView: "#ffffff",
    balanceMyTable: "#ffffff",
    modalMenu: "#ffffff",
    table: "rgba(134, 141, 155, 0.08)",
    BW: "#ffffff",
    transBG: "rgba(165,175,196,0.1)",
    header: "#f5f7fa",
    footer: "#dfe3e8",
  },
  common: {
    main: "#181818",
    sub: "#ffffff",
    thumbnail: "#fedb00",
    highlight: "#ff5733",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  primary: {
    main: "#0056cc",
    hover: "#003da1",
    active: "#00297e",
    disabled: "#ccd5e4",
  },
  danger: {
    main: "#d9534f",
    hover: "#b52b27",
    active: "#8a1e1a",
    disabled: "#f2c7c5",
  },
  success: {
    main: "#5cb85c",
    hover: "#4a9e4a",
    active: "#377f37",
    disabled: "#d9eed9",
  },
  text: {
    primary: "#212529",
    secondary: "#6c757d",
    disabled: "#adb5bd",
    inverted: "#ffffff",
  },
});

export const themeDark = createGlobalTheme("html.dark", theme, {
  bg: {
    gnb: "#101014",
    lnb: "hsla(224, 13%, 11%, 1)",
    tradingView: "#101014",
    balanceMyTable: "#181a1f",
    modalMenu: "#2f3136",
    table: "rgba(134, 142, 155, 0.15)",
    BW: "#000000",
    transBG: "rgba(165,175,196,0.1)",
    header: "#1e1f22",
    footer: "#121314",
  },
  common: {
    main: "#ffffff",
    sub: "#eeeeee",
    thumbnail: "#fedb00",
    highlight: "#ff4500",
    shadow: "rgba(0, 0, 0, 0.5)",
  },
  primary: {
    main: "#339af0",
    hover: "#1c7ed6",
    active: "#1864ab",
    disabled: "#82c4f7",
  },
  danger: {
    main: "#ff6b6b",
    hover: "#fa5252",
    active: "#e03131",
    disabled: "#ffd6d6",
  },
  success: {
    main: "#51cf66",
    hover: "#40c057",
    active: "#2f9e44",
    disabled: "#c3f9ca",
  },
  text: {
    primary: "#e9ecef",
    secondary: "#ced4da",
    disabled: "#868e96",
    inverted: "#000000",
  },
});
