import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Form from "../components/Form";

const schema = z.object({
  email: z.string().nonempty("Field Is Required").email("Email Is Not Valid"),
  password: z
    .string()
    .nonempty("Field Is Required")
    .min(4, "Password must contain atleat 4 character"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          id="email"
          type="email"
          errors={errors}
          register={register}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          errors={errors}
          register={register}
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
