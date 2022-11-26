import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 17.188rem;
  height: 1.875rem;
  border-bottom: 0.063rem solid rgb(228, 16, 93);

  *:focus {
    outline: none;
}
`;

export const IconContainer = styled.div`
  margin-right: 0.625rem;
`;

export const InputText = styled.input`
  width: 100%;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 0;
  height: 1.875rem;
`;

export const ErrorText = styled.p`
  margin: 0.313rem 0;
  color: #ff0000;
  font-size: 0.75rem;

  
`;
