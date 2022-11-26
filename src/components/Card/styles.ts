import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 11.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.75rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.75rem;

  div {
    margin-left: 0.75rem;
  }

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.563rem;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #ffffff;
  }
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 0.188rem solid #ffffff;
`;

export const PostInfo = styled.div`
  margin-bottom: 0.75rem;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125;
    line-height: 1.563rem;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const HasInfo = styled.div`
  margin-top: 0.75rem;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125;
    line-height: 1.563rem;
    color: #ffffff80;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
