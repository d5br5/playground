import styled from "@emotion/styled";
import React from "react";

const Input = ({ id, label }) => {
  console.log(`rendered : Input for "${label}"`);
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputBox id={id} />
    </Container>
  );
};

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
`;

export default Input;
