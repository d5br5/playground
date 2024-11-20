import { darkMode } from "@/components/system/styles/sprinkles.css";
import { vars } from "@/components/system/theme/themes.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle(`.${darkMode}`, {
  background: vars.palette.black,
  color: vars.palette.gray50,
  colorScheme: "dark",
});

globalStyle("html", {
  background: vars.palette.white,
  color: vars.palette.coolGray900,
});
