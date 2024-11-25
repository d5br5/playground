// components/ResponsiveBox.tsx

import { AllHTMLAttributes, ElementType } from "react";
import classnames from "classnames";
import { sprinkles, Sprinkles } from "../styles/sprinkles.css";

import classNames from "classnames";

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | "className"
      | "content"
      | "height"
      | "translate"
      | "color"
      | "width"
      | "cursor"
    >,
    Sprinkles {
  component?: ElementType;
  className?: Parameters<typeof classnames>[0];
}

const ResponsiveBox: React.FC<BoxProps> = ({
  children,
  padding,
  margin,
  display,
  textAlign,
  fontSize,
}) => {
  const responsiveClass = sprinkles({
    padding,
    margin,
    display,
    textAlign,
    fontSize,
  });

  return <div className={classNames(responsiveClass)}>{children}</div>;
};

export default ResponsiveBox;
