import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 4.25rem 0rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 18.75rem;
`;

export const Column = styled.div`
  flex: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  margin: 0.6em 0px;
  width: 30rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
`;

export const SubtitleLogin = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  margin-bottom: 2.188rem;
  line-height: 1.563rem;
`;

export const ForgotPasswordText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #e5e044;
`;

export const CreateAccountText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: rgba(35, 221, 122, 1);
`;
