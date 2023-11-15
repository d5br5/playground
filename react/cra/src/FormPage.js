import styled from "@emotion/styled";
import Layout from "./Layout";
import Input from "./Input";
import { useState } from "react";

function FormPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layout>
      <Form>
        <Input id="Name" value={name} onChange={handleName} />
        <Input id="Password" value={password} onChange={handlePassword} />
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

export default FormPage;
