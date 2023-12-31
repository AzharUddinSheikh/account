import React, { useEffect } from "react";
import Form from "../components/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser, userDetailed } from "../store/userSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, isLoggedIn } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: userData,
  });

  useEffect(() => {
    reset(userData);
  }, [userData]);

  // use custom hook used multiple
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updateUser(data, token));
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userDetailed(token));
    }
  }, [isLoggedIn]);

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
            label="State Name"
            id="state"
            errors={errors}
            register={register}
          />
          <InputField
            label="Company Name"
            id="company"
            errors={errors}
            register={register}
          />
          <InputField
            label="Country"
            id="country"
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
