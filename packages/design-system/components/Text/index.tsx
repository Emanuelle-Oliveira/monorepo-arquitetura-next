import styled from "styled-components";
import React from "react";

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
}

const Styledtext = styled.span`
  font-family: sans-serif;
`;

export function Text({ tag, children }: TextProps) {
  return <Styledtext as={tag}>{children}</Styledtext>;
}
