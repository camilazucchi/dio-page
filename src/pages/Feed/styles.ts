import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 20rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
  color: rgb(255, 255, 255);
`;
export const TitleHighlight = styled.span`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.563rem;
  margin-bottom: 1.5rem;
  color: #ffffff70;
`;

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 1.5rem;
`;
