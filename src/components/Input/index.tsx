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
  type?: "text" | "email" | "password";
}

const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
  type = "text",
}) => {
  const [isRightIconClicked, setIsRightIconClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRightIconClick = () => {
    setIsRightIconClicked(!isRightIconClicked);
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "email" && event.target.value.trim() !== "") {
      const isValid = isValidEmail(event.target.value);
      console.log(`É um email válido? ${isValid}`);
    }
  };

  return (
    <StyledInputContainer>
      {leftIcon && <StyledIconContainer>{leftIcon}</StyledIconContainer>}
      <StyledInput
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {rightIcon && (
        <StyledIconContainer clickable onClick={handleRightIconClick}>
          {isRightIconClicked ? <BsEyeSlashFill /> : rightIcon}
        </StyledIconContainer>
      )}
    </StyledInputContainer>
  );
};
