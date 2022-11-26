import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  position: relative;
  background: rgb(86, 86, 86);
  color: rgb(255, 255, 255);
  border-radius: 2rem;
  border: none;
  font-size: 1rem;
  padding: 0.25rem 1.5rem;
  margin: 0rem 0.5rem;
  text-transform: uppercase;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background: rgb(228, 16, 93);
      color: rgb(255, 255, 255);
      text-align: center;

      width: 15rem;
      height: 3rem;
      margin-top: 1rem;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 0.063rem solid rgb(228, 16, 93);
        border-radius: 1.375rem;
        top: -0.313rem;
        left: -0.375rem;
        width: calc(100% + 0.625rem);
        height: calc(100% + 0.625rem);
      }
    `}
`;
