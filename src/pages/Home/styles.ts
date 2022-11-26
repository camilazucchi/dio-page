import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 4.25rem 0rem;
  width: 100%;
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
  color: rgb(228, 16, 93);
`;

export const TextContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  width: 26.25rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  line-height: 1.30rem;
  color: rgb(255, 255, 255);
`;
