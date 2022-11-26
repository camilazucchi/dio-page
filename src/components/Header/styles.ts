import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  max-width: 80%;
  height: 2.938rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: rgb(21, 21, 21);
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.938rem;
  height: 1.875rem;
  background: #2d2d37;
  border-radius: 0.5rem;
  padding: 0.125rem 0.313rem;
  margin: 0 0.75rem;
`;

export const Menu = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1.563rem;
  color: rgb(255, 255, 255);
  margin-right: 0.75rem;
`;

export const RightMenu = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1.15;
  color: rgb(255, 255, 255);
  margin-right: 0.75rem;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 0.125rem solid rgb(255, 255, 255);
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: rgb(255, 255, 255);
`;
