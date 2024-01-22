export const colors = {
  primary: "#08a945",
  text: "#525252",
  text100: "rgba(109, 109, 109, 0.1)",
  text300: "rgba(109, 109, 109, 0.3)",
  text500: "#6D6D6D",
  background: "#fffdee",
  secondary: "#F2EED1",
  secondary400: "#FAF6DC",
  link: "#08a945",
  hover: "#54414b",
} as const;

export type ColorName = keyof typeof colors;

export const containers = {
  xs: "56rem",
  sm: "72rem",
  md: "96rem",
  lg: 1080,
  main: 640,
} as const;

export type Containers = keyof typeof containers;

export const spacingUnits = {
  xs: 8,
  sm: 12,
  unit: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export type SpacingUnits = keyof typeof spacingUnits;

export const breakpoints = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1920,
} as const;

export type BreakPoints = keyof typeof breakpoints;
