import styled from "styled-components";

export const StyledInputContainer = styled.div`
  min-width: 390px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 11px;
  border: 1px solid ${({ theme }) => theme.colors["border-color"]};
  border-radius: 4px;
  gap: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.colors["placeholder"]};
    font-weight: 100;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors["text-support"]};
  }
`;

export const StyledIconContainer = styled.div<{ clickable?: boolean }>`
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  display: flex;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors["text-base"]};
`;
