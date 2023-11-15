import styled from "@emotion/styled";
import Layout from "./Layout";
import Input from "./Input";
import { useState } from "react";

function FormHook() {
  const [name, setName] = useState({
    value: "",
    error: false,
    msg: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    msg: "",
  });

  const handleName = (e) => {
    const { value } = e.target;
    setName((prev) => ({ ...prev, value }));
  };
  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword((prev) => ({ ...prev, value }));
  };

  const validateName = (value) => {
    return value.length < 6;
  };
  const validatePassword = (value) => {
    return value.length > 4 && value.length < 10;
  };

  return (
    <Layout>
      <Form>
        <Input name="name" value={name.value} onChange={handleName} />
        <Input
          name="password"
          value={password.value}
          onChange={handlePassword}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
}

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px 30px;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 150px;
  height: 25px;
`;

export default FormHook;
