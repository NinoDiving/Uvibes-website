"use client";

import { Button, styled } from "@mui/material";

export const StyledWhiteButton = styled(Button)(
	`
  background:  #F4ECEC;
  color:var(--mainColor);
  border-radius: calc(var(--border-radius) * 3);
  padding: var(--spacing-ref);
  border: none;
  width: 15rem;
  height: 3rem;
  font-family: var(--title-font);
  font-size: calc(var(--font-size-ref) * 1);
  letter-spacing: var(--spacing-letter);
  box-shadow: 0px 2px 2px 0px #0000006b;

  &:hover {
  opacity: 0.9;
  };
  `,
);
