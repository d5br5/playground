import styled from "@emotion/styled";
import React, { forwardRef } from "react";

const Input = forwardRef(({ name, error, ...props }, ref) => {
  console.log(`rendered : Input for "${name}"`);
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <InputBox id={name} name={name} error={error} {...props} ref={ref} />
    </Container>
  );
});

const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  margin-top: 3px;
`;

const InputBox = styled.input`
  width: 200px;
  height: 20px;
  font-size: 14px;
  color: ${(props) => (props.error ? "red" : "")};
`;

export default Input;
