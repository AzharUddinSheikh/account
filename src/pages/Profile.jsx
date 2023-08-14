import React from "react";
import Form from "../components/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().nonempty("field is required").email("Email Is Not Valid"),
  name: z.string().nonempty("field is required").min(3),
  mobile: z
    .string()
    .nonempty("field is required")
    .min(10, "mobile number should be 10 digit")
    .max(10, "mobile number should be 10 digit"),
  city: z.string().nonempty("field is required").min(1).max(10),
  company: z.string().nonempty("field is required").min(1),
});

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <h1>User Profile</h1>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            id="email"
            type="email"
            errors={errors}
            register={register}
          />
          <InputField
            label="Name"
            id="name"
            errors={errors}
            register={register}
          />
          <InputField
            label="Mobile Number"
            id="mobile"
            type="text"
            errors={errors}
            register={register}
          />
          <InputField
            label="City Name"
            id="city"
            errors={errors}
            register={register}
          />
          <InputField
            label="Company Name"
            id="company"
            errors={errors}
            register={register}
          />
          <Button type="submit">Update Profile</Button>
        </Form>
      </div>
    </div>
  );
}

export default Profile;
