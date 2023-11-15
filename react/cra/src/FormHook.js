import styled from "@emotion/styled";
import Layout from "./Layout";
import Input from "./Input";
import { useForm } from "react-hook-form";

function FormPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name", { required: true })} />
        <Input {...register("password", { minLength: 3 })} />
        {errors.password && "Error!"}
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
