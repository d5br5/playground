import styled from "@emotion/styled";
import Layout from "./Layout";
import Input from "./Input";

function FormPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Input id="name" label="Name" />
        <Input id="password" label="Password" />
        <Button>Submit</Button>
      </Form>
    </Layout>
  );
}

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 25px;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 150px;
  height: 25px;
`;

export default FormPage;
