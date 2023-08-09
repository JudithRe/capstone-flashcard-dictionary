const { default: Link } = require("next/link");
const { styled } = require("styled-components");

export const LinkWithoutDecoration = styled(Link)`
  text-decoration: none;
`;
