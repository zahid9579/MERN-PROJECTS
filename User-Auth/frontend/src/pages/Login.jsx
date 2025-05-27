import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        data
      );
      console.log("Login Successfully", response.data);
      navigate("/");
    } catch (error) {
      console.log("Login Failed", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            {...register("email", { required: "This field is required!" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            {...register("password", { required: "This field is required!" })}
          />
          {errors.password && <p>{errors.password.message}</p>} <br />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
