import { BreakPoints, breakpoints } from "@/src/config/variables";

// eslint-disable-next-line import/prefer-default-export, arrow-body-style
export const mq = (key: BreakPoints) => {
  return `@media (min-width: ${breakpoints[key]}px)`;
};
