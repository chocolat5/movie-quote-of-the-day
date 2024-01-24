import { CSSProperties } from "react";

export interface Quote {
  quote: string;
  title: string;
  year: number;
  size: "small" | "medium" | "large";
}

export interface TextSize {
  id: "small" | "medium" | "large";
  label: "S" | "M" | "L";
  fontSize: CSSProperties["fontSize"];
}

export interface Theme {
  id: string;
  label: string;
  color: CSSProperties["color"];
  bgColor: CSSProperties["backgroundColor"];
}

export type ClickEvent = React.MouseEvent<HTMLButtonElement>;
