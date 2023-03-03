import React, { ChangeEvent } from "react";
import styled from "styled-components";

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface Props {
  value?: InputValue;
  placeholder?: string;
  onChange?: (v: InputChangeEvent) => void;
  onKeyDown?: React.KeyboardEventHandler;
}

const SearchInput = ({ value, placeholder, onChange, onKeyDown }: Props) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

SearchInput.defaultProps = {
  placeholder: "search",
};

export default SearchInput;

const Input = styled.input`
  font-size: 1rem;
  padding: 12px 8px 12px 8px;
  border-width: 1.5px;
  border-color: solid rgba(255, 255, 255, 0.23);
  border-radius: 36px;
`;
