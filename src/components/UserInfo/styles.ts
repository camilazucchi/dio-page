import styled from "styled-components";
import { IUserInfoStyle } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 0.188rem solid #ffffff;
  margin-right: 0.75rem;
`;

export const TextName = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.563rem;
  color: #ffffff;
`;
export const Progress = styled.div<IUserInfoStyle>`
    position: relative;
    width: 11.25rem;
    height: 0.375rem;
    background-color: #FFFFFF;
    border-radius: 0.188rem;

&::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: 0.375rem;
    border-radius: 0.188rem;
    background-color: #23DD7A;
}
`;
