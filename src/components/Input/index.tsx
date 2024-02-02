import React, { ReactNode, useState } from "react";
import {
  StyledIconContainer,
  StyledInput,
  StyledInputContainer,
} from "./styles";
import { BsEyeSlashFill } from "react-icons/bs";

interface InputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
}) => {
  const [isRightIconClicked, setIsRightIconClicked] = useState(false);

  const handleRightIconClick = () => {
    setIsRightIconClicked(!isRightIconClicked);
  };

  return (
    <StyledInputContainer>
      {leftIcon && <StyledIconContainer>{leftIcon}</StyledIconContainer>}
      <StyledInput placeholder={placeholder} />
      {rightIcon && (
        <StyledIconContainer clickable onClick={handleRightIconClick}>
          {isRightIconClicked ? <BsEyeSlashFill /> : rightIcon}
        </StyledIconContainer>
      )}
    </StyledInputContainer>
  );
};
