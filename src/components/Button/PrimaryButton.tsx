import React from "react";
import styled from "styled-components";

export interface primaryButtonProps {
  label: string;
  type: string;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;

  disabled?: boolean;
}

const PrimaryButton = ({
  label,
  onClick,
  onSubmit,
  disabled,
}: primaryButtonProps) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  label: "button",
  type: "",
};

export default PrimaryButton;

const Button = styled.button``;

// import React, { ChangeEvent, useState } from "react";
// import styled from "styled-components";

// export interface Props {
//   placeholder?: string;
// }

// const SearchInput = ({ placeholder }: Props) => {
//   const [inputValue, setInputValue] = useState("");

//   const foo = (e: any) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <Input
//       type="text"
//       value={inputValue}
//       placeholder={placeholder}
//       onChange={foo}
//     />
//   );
// };

// export default SearchInput;

// const Input = styled.input`
//   font-size: 1rem;
//   padding: 16px 8px 16px 8px;
//   border-width: 1px;
//   border-color: solid rgba(0, 0, 0, 0.23);
//   border-radius: 20px;
// `;
