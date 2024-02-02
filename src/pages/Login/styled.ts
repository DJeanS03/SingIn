import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 450px;
  max-height: 490px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors["white"]};
`;

export const LoginContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;
