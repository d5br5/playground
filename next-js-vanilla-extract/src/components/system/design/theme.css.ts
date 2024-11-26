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
  },
  common: {
    main: null,
    sub: null,
    thumbnail: null,
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
  },
  common: {
    main: "#181818",
    sub: "#ffffff",
    thumbnail: "red",
  },
});

export const themeDark = createGlobalTheme("html.dark", theme, {
  bg: {
    gnb: "#101014",
    lnb: "hsla(224, 13%, 11%, 1)",
    tradingView: "#101014",
    balanceMyTable: "#181a1f",
    modalMenu: "#2f3136",
    table: "rgba(134,142,155,0.15)",
    BW: "#000000",
    transBG: "rgba(165,175,196,0.1)",
  },
  common: {
    main: "#ffffff",
    sub: "#eeeeee",
    thumbnail: "#fedb00",
  },
});