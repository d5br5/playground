import styled from "@emotion/styled";
import Layout from "./Layout";
import Input from "./Input";
import { useState } from "react";

function FormHook() {
  const [email, setEmail] = useState({ value: "", error: false });

  const handleEmail = (e) => {
    const { value } = e.target;
    const isValid = validateEmail(value);
    if (!restrictEmail(value))
      setEmail((prev) => ({ ...prev, value, error: !isValid }));
  };

  const validateEmail = (value) => {
    return value.length > 6;
  };

  const restrictEmail = (value) => {
    return value.length > 10;
  };

  return (
    <Layout>
      <Form>
        <Input
          name="email"
          value={email.value}
          error={email.error}
          onChange={handleEmail}
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
