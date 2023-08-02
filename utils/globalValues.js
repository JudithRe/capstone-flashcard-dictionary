const breakpoints = {
  s: "320px",
  m: "768px",
  l: "1024px",
};

export const device = {
  phone: `(min-width: ${breakpoints.s})`,
  tablet: `(min-width: ${breakpoints.m})`,
  desktop: `(min-width: ${breakpoints.l})`,
};
