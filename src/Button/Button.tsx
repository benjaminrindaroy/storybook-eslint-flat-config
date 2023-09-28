import React, { MouseEventHandler } from "react";
import "./Button.style.css";

interface Props extends React.ComponentProps<"button"> {
  customButtonText: string;
}

const Button: React.FC<Props> = ({
  customButtonText,
  children,
  ...buttonProps
}) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    window.alert(
      `onClick triggered: event: ${event}, custom text: ${customButtonText}`
    );
  };
  return (
    <button {...buttonProps} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
